import { intro, outro, select, text, spinner } from '@clack/prompts'
import { Command } from '@oclif/core'
import * as fs from 'fs';
import { cloneGitRepository } from '../utils/helper';

const githubRepos = {
  typescript: 'https://github.com/skirianov/vite-react-ts-template',
  javascript: 'https://github.com/skirianov/vite-react-template',
}

const existsDirectory = async (path: string): Promise<boolean> => {
  try {
    await fs.promises.access(path);

    const stats = await fs.promises.lstat(path);

    return stats.isDirectory();
  } catch {
    return false;
  }
};

export default class CreateReact extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
  }

  static args = {
  }

  public async run(): Promise<void> {
    intro('Welcome to create-react CLI! 🚀');

    const dirName = await text({
      message: 'What is the name of your project? 🤔',
      initialValue: 'my-app',
      validate: (value) => {
        const regex = new RegExp('^[a-zA-Z-]+$');

        if (!value) {
          return 'Directory name is required 👀';
        } else if (!regex.test(value)) {
          return 'Directory name may only contain letters and dashes 😬';
        }
      }
    }) as string;

    const dirExists = await existsDirectory(dirName);

    if (dirExists) {
      outro(`Directory ${dirName} already exists 😬`);
      process.exit(1);
    }

    const template = await select({
      message: 'Select a language of your new project 🤔',
      options: [
        { label: 'TypeScript', value: 'typescript' },
        { label: 'JavaScript', value: 'javascript' },
      ],
      initialValue: 'typescript',
    }) as unknown as keyof typeof githubRepos;
    
    const sp = spinner();
    sp.start('Cloning git repository 🔁');

    await cloneGitRepository({
      dirName,
      gitRepositoryURL: githubRepos[template],
    })

    sp.stop('Git repository cloned! 🎉');

    outro("Let's start coding! 🚀");
  }
}
