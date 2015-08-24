var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];
var matches = [];

fs.readdir(dir, function(err, list) {
  if (err)
    throw err;

  matches = list.filter(function(file) {
    return path.extname(file) === '.' + ext;
  });

  printFiles(matches);
});

function printFiles(arr) {
  arr.forEach(function(file){
    console.log(file);
  });
}
