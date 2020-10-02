sarafi
======

Daily Rates

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/sarafi.svg)](https://npmjs.org/package/sarafi)
[![Downloads/week](https://img.shields.io/npm/dw/sarafi.svg)](https://npmjs.org/package/sarafi)
[![License](https://img.shields.io/npm/l/sarafi.svg)](https://github.com/arashrasoulzadeh/sarafi/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g sarafi
$ sarafi COMMAND
running command...
$ sarafi (-v|--version|version)
sarafi/0.0.4 darwin-x64 node-v13.11.0
$ sarafi --help [COMMAND]
USAGE
  $ sarafi COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sarafi coin`](#sarafi-coin)
* [`sarafi dolar`](#sarafi-dolar)
* [`sarafi euro`](#sarafi-euro)
* [`sarafi help [COMMAND]`](#sarafi-help-command)

## `sarafi coin`

Show the current coin prices in IRR

```
USAGE
  $ sarafi coin

DESCRIPTION
  ...
```

_See code: [src/commands/coin.js](https://github.com/arashrasoulzadeh/sarafi/blob/v0.0.4/src/commands/coin.js)_

## `sarafi dolar`

Show the current exchange rate of USD in IRR

```
USAGE
  $ sarafi dolar

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/dolar.js](https://github.com/arashrasoulzadeh/sarafi/blob/v0.0.4/src/commands/dolar.js)_

## `sarafi euro`

Show the current exchange rate of EUR in IRR

```
USAGE
  $ sarafi euro

DESCRIPTION
  ...
```

_See code: [src/commands/euro.js](https://github.com/arashrasoulzadeh/sarafi/blob/v0.0.4/src/commands/euro.js)_

## `sarafi help [COMMAND]`

display help for sarafi

```
USAGE
  $ sarafi help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
