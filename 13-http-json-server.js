var http = require('http');
var url = require('url');

function getTime(date) {
  return {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
}

function getUnixtime(date) {
  return {"unixtime": date.getTime()};
}

const server = http.createServer(function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var date = new Date(parsedUrl.query.iso);
  var time = null;

  if(request.url.indexOf('/api/parsetime') != -1) {
    time = getTime(date);
  }

  if(request.url.indexOf('/api/unixtime') != -1) {
    time = getUnixtime(date); 
  }

  if(time) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(time));
  } else {
    response.statusCode(404);
    response.end();
  }
});

server.listen(process.argv[2]);