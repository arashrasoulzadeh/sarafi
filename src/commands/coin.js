const {
  Command,
  flags
} = require('@oclif/command')
const {
  default: axios
} = require('../axios')
const {
  default: results
} = require('../results')


class HelloCommand extends Command {
  async run() {
    results.coin()
  }
}

HelloCommand.description = `Show the current coin prices in IRR
...
`

HelloCommand.flags = {

}

module.exports = HelloCommand
