// how to read files
var fs = require('fs');

console.log('Executed Before file Reading.');

// var data = fs.writeFile('./files/file3', 'Hello there! What\'s up?!' ,  'utf8', function(error){
// 	if(error) throw error;
// 	console.log('file written');
// });


var data = fs.writeFileSync('./files/file3Sync', 'Hello there! What\'s up?!' ,  'utf8' );
console.log('file written');

console.log('Executed After file Reading, probably.');