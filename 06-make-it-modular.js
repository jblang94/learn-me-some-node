var filteredLs = require('./05-filtered-ls.js');
var directory = process.argv[2];
var extension = process.argv[3];

filteredLs(directory, extension, function(err, files) {
  if(err) throw err;
  files.forEach(function(file) {
    console.log(file);
  });
});