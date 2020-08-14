const color = require('./consoleColors.js');

module.exports = function (server){

  server.on('listening', () => {

    console.log(`\t\t\t\t\t ${color.green}[SERVER STATUS]${color.clear}: ${color.blue}listening...`)

  })

  server.on('connection', conn => {

    const clientAddress = conn.remoteAddress.substr(7);
    
    console.log(`${color.purple}[CLIENT CONNECTION]${color.clear}: ${color.green}client address ${color.blue}${clientAddress}`);
  })

  server.on('close', () => {

    console.log(`\t\t\t\t\t ${color.red}[SERVER STATUS]${color.clear}: ${color.blue}shutdown..`)

  })
}
