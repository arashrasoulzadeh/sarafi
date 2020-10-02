const {Command, flags} = require('@oclif/command')

class HelloCommand extends Command {
  async run() {
     this.log("hi")
  }
}

HelloCommand.description = `Show the current exchange rate of USD in IRR
...
Extra documentation goes here
`

HelloCommand.flags = {
  
}

module.exports = HelloCommand
