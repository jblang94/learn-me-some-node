var bl = require('bl');
//var concatStream = require('concat-stream');
var http = require('http');

var url = process.argv[2];
// http.get(url, function(response) {
//   response.pipe(concatStream(function(data) {
//     data = data.toString();
//     console.log(data);
//   }));

//   response.on('error', function(err) {
//     console.error(err);
//   })
// });

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if(err) {
      throw err;
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});