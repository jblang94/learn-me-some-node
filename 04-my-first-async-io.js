var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  if(err) throw err;
  var contents = data.toString();
  var linecount = contents.split('\n').length - 1;
  console.log(linecount);
});