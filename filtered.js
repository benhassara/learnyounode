var fs = require('fs');
var path = require('path');

function byExt(dir, ext, callback) {
  var matches = [];

  fs.readdir(dir, function(err, list) {
    if (err)
      return callback(err);

    matches = list.filter(function(file) {
      return path.extname(file) === "." + ext;
    });

    return callback(null, matches);
  });
}

module.exports = byExt;
