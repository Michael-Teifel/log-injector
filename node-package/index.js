const fetch = require('node-fetch')

function LogInjector(host) {
  this.host = host
  console.log('new Log Injector created with host ', this.host)
}

LogInjector.prototype.log = function(name, value) {
  console.log('Sending log to log-injector...')
  const body = {name, value}
  fetch(`${this.host}/log_item`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => {
      return response.json()
    })
    .then(data => {
      if(data.status === 'success') {
        console.log('Item logged succesfuly')
      } else {
        console.log('Log not created successfuly')
      }
    })
    .catch(err => console.log(err.message))
}
module.exports = LogInjector