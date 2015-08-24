var fs = require('fs');

var path = process.argv[2];
var content;

fs.readFile(path, 'utf8', function(err, data) {
  if (err)
    throw err;
  content = data.split('\n');
  console.log(content.length - 1);
});
