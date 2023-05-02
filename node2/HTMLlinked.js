var http = require('http');
var file = require('fs');
http.createServer(function (req, res) {
  file.readFile('index.html',function(err,data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  return res.end();
  });
}).listen(8080);


