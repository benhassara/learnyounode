var http = require('http');

var url = process.argv[2];
var chars = [];

http.get(url, function(res) {
  res.setEncoding('utf8');

  res.on('data', function(data) {
    chars.push(data);
  });
  res.on('error', console.error);

  res.on('end', function(){
    console.log(chars.reduce(function(prev, curr){
      return prev + curr.length;
    }, 0));
    console.log(chars.join(''));
  });
});
