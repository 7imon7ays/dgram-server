var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var port = 3000;

server.on('message', function(message, rinfo) {
  console.log('server got message %s from %s:%d',
             message,
             rinfo.address,
             rinfo.port);
  server.send(message,
              0,
              message.length,
              rinfo.port,
              rinfo.address);
})


server.on('listening', function() {
  var address = server.address();
  console.log('sever listening on ' + address.address + ':' + address.port);
});
server.bind(port);
