const Table = require('cli-table');
const moment = require('jalali-moment');
const {
  default: axios
} = require("./axios")


function format(command, status, data) {
  var table = new Table({
    head: [command, status]
  });

  table.push(
    ['Price', data['p']],
    ['Low', data['l']],
    ['High', data['h']],
    ['Date', moment(data['ts']).locale('fa').format('YYYY/M/D')]
  );

  console.log(table.toString());
}

function dolar() {
  axios().then(response => {
    format("dolar", "nimaii", response.data['current']['price_dollar']);
    format("dolar", "azad (rl)", response.data['current']['price_dollar_rl']);
    format("dolar", "azad (dt)", response.data['current']['price_dollar_dt']);
  })
}

function euro() {
  axios().then(response => {
    format("euro", "azad", response.data['current']['price_eur']);
  })
}


function coin() {
  axios().then(response => {
    format("coin", "bahar", response.data['current']['retail_sekeb']);
    format("coin", "emami", response.data['current']['retail_sekee']);
    format("coin", "nim", response.data['current']['retail_nim']);
    format("coin", "rob", response.data['current']['retail_rob']);
    format("coin", "geram", response.data['current']['retail_gerami']);
  })
}


module.exports.default = this
module.exports.dolar = dolar
module.exports.euro = euro
module.exports.coin = coin
