var http = require('http');
var bl = require('bl');

var callbackCounter = 0;
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];


function printResults() {
  results.forEach(function(result) {
    console.log(result);
  });
}

function getResponse(index, url) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if(err) {
        return console.error(err);
      }

      callbackCounter++;
      results[index] = data.toString();
      if(callbackCounter == urls.length) {
        printResults();
      }
    }));
  });
}

for(var i = 0; i < urls.length; i++) {
  getResponse(i, urls[i]);
}