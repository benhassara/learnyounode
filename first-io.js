var fs = require('fs');

var path = process.argv[2];

var dataArr = fs.readFileSync(path).toString().split('\n');

console.log(dataArr.length - 1);
