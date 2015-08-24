var http = require('http');
var url = require('url');
var result;

var server = http.createServer(function(req, res) {
  if (req.method !== 'GET') {
    res.send('Please send a GET request.');
  }
  else {

    if (/parsetime/.test(req.url)) {
      result = parseTime(url.parse(req.url));
    }
    else if(/unixtime/.test(req.url)) {
      result = unixTime(url.parse(req.url));
    }

    if (result) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result));
    }
    else {
      res.writeHead(404);
      res.end();
    }
  }
});

server.listen(process.argv[2]);

function parseTime(url) {
  var date = new Date(url.query.slice(4));

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixTime(url) {
  var date = new Date(url.query.slice(4));

  return {unixtime: date.getTime()};
}
