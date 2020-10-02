const axios = require('axios').default;

// Make a request for a user with a given ID




function call() {
  return axios.get('https://call.tgju.org/ajax.json')
}

module.exports.default = call
