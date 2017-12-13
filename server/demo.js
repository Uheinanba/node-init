var fs = require('fs');
var http = require('http');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
  })
  .listen(8888, '127.0.0.1');

console.log('Server running on port 8080.');
