var fs = require('fs');
var path = require('path');

// var directory = process.argv[2];
// var extension = '.' + process.argv[3];

// fs.readdir(directory, function(err, files) {
//   if(err) throw err;
//   files.forEach(function(file) {
//     if(path.extname(file) == extension) {
//       console.log(file);
//     }
//   });
// });

function filteredLs(directory, extensionFilter, callback) {

  fs.readdir(directory, function(err, files) {
    if(err) {
      return callback(err);
    }
    extensionFilter = '.' + extensionFilter;
    var filteredFiles = files.filter(function(file) {
      return path.extname(file) == extensionFilter;
    });
    callback(null, filteredFiles);
  });

}

module.exports = filteredLs