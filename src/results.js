const {
  default: axios
} = require("./axios")


function format(data) {
  console.log("Price", "\t", data['p']);
  console.log("Low", "\t", data['l']);
  console.log("High", "\t", data['h']);
  console.log("Date", "\t", data['ts']);
}

function dolar() {
  axios().then(response => {
    console.log("\nnimaii\n==========")
    format(response.data['current']['price_dollar']);
    console.log("\nazad (rl) \n==========")
    format(response.data['current']['price_dollar_rl']);
    console.log("\nazad (dt) \n==========")
    format(response.data['current']['price_dollar_dt']);
  })
}

function euro() {
  axios().then(response => {
    console.log("azad \n==========")
    format(response.data['current']['price_eur']);
  })
}


function coin() {
  axios().then(response => {
    console.log("\nbahar\n==========")
    format(response.data['current']['retail_sekeb']);
    console.log("\nemami  \n==========")
    format(response.data['current']['retail_sekee']);
    console.log("\nnim \n==========")
    format(response.data['current']['retail_nim']);
    console.log("\nrob \n==========")
    format(response.data['current']['retail_rob']);
    console.log("\ngeram \n==========")
    format(response.data['current']['retail_gerami']);
  })
}


module.exports.default = this
module.exports.dolar = dolar
module.exports.euro = euro
module.exports.coin = coin
