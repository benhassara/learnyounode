var http = require('http');

var urls = process.argv.slice(2);
var strings = [];
var counter = 0;

function printStrings() {
  if (counter < 3)
    return;

  strings.forEach(function(str){
    console.log(str);
  });
}

urls.forEach(function(link, index) {
  var buffer = [];
  http.get(link, function(res) {
    res.setEncoding('utf8');

    res.on('data', function(data){
      buffer.push(data);
    });
    res.on('error', console.error);

    res.on('end', function(){
      strings[index] = buffer.join('');
      counter++;
      printStrings();
    });
  });
});

// try for loop w index
// why did forEach break
