const micro = require('micro')
const fs = require('fs')

const html = fs.readFileSync(__dirname + '/index.html')

const server = micro(async (req, res) => {
  res.end(html)
})

const io = require('socket.io')(server)

// socket-io handlers
require('./web-socket-config.js')(io)

server.listen(4000)

// Micro expects a function to be exported
module.exports = () => console.log('YOLO');
