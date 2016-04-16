// how to read files
var fs = require('fs');

console.log('Executed Before file Reading.');
fs.readFile('./files/file', 'utf8', function(error, data){
	console.log(data);
});

fs.readFile('./files/file', function(error, data){
	console.log(data);
});

var data = fs.readFileSync('./files/file', 'utf8');
console.log(data);

console.log('Executed After file Reading, probably.');