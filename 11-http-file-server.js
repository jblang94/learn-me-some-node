const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function(request, response) {
  const reader = fs.createReadStream(filePath);
  reader.on('readable', function() {
    response.write(reader.read());
  });

  reader.on('end', function() {
    response.end();
  });
});  

server.listen(port, '127.0.0.1');

/* LEARN YOU NODE SOLUTION

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/