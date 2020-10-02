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
    results.dolar()
  }
}

HelloCommand.description = `Show the current exchange rate of USD in IRR
...
`

HelloCommand.flags = {

}

module.exports = HelloCommand
