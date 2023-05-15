oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g new-cli
$ new-cli COMMAND
running command...
$ new-cli (--version)
new-cli/0.0.0 darwin-arm64 node-v16.17.1
$ new-cli --help [COMMAND]
USAGE
  $ new-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`new-cli hello PERSON`](#new-cli-hello-person)
* [`new-cli hello world`](#new-cli-hello-world)
* [`new-cli help [COMMANDS]`](#new-cli-help-commands)
* [`new-cli plugins`](#new-cli-plugins)
* [`new-cli plugins:install PLUGIN...`](#new-cli-pluginsinstall-plugin)
* [`new-cli plugins:inspect PLUGIN...`](#new-cli-pluginsinspect-plugin)
* [`new-cli plugins:install PLUGIN...`](#new-cli-pluginsinstall-plugin-1)
* [`new-cli plugins:link PLUGIN`](#new-cli-pluginslink-plugin)
* [`new-cli plugins:uninstall PLUGIN...`](#new-cli-pluginsuninstall-plugin)
* [`new-cli plugins:uninstall PLUGIN...`](#new-cli-pluginsuninstall-plugin-1)
* [`new-cli plugins:uninstall PLUGIN...`](#new-cli-pluginsuninstall-plugin-2)
* [`new-cli plugins update`](#new-cli-plugins-update)

## `new-cli hello PERSON`

Say hello

```
USAGE
  $ new-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/skirianov/new-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `new-cli hello world`

Say hello world

```
USAGE
  $ new-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ new-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `new-cli help [COMMANDS]`

Display help for new-cli.

```
USAGE
  $ new-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for new-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `new-cli plugins`

List installed plugins.

```
USAGE
  $ new-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ new-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `new-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ new-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ new-cli plugins add

EXAMPLES
  $ new-cli plugins:install myplugin 

  $ new-cli plugins:install https://github.com/someuser/someplugin

  $ new-cli plugins:install someuser/someplugin
```

## `new-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ new-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ new-cli plugins:inspect myplugin
```

## `new-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ new-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ new-cli plugins add

EXAMPLES
  $ new-cli plugins:install myplugin 

  $ new-cli plugins:install https://github.com/someuser/someplugin

  $ new-cli plugins:install someuser/someplugin
```

## `new-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ new-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ new-cli plugins:link myplugin
```

## `new-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ new-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ new-cli plugins unlink
  $ new-cli plugins remove
```

## `new-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ new-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ new-cli plugins unlink
  $ new-cli plugins remove
```

## `new-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ new-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ new-cli plugins unlink
  $ new-cli plugins remove
```

## `new-cli plugins update`

Update installed plugins.

```
USAGE
  $ new-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
