var filtered = require('./filtered');

var dir = process.argv[2];
var ext = process.argv[3];

filtered(dir, ext, function(err, list) {
  if (err)
    return console.error('Error: ', err);

  list.forEach(function(file) {
    console.log(file);
  });
});
