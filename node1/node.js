var http = require('http');
var dt = require('./dateTime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("here is request is send to the server to get date and time...");
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);