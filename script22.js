var express = require('express');

var app = express();

app.get('/', function(req, resp){
	resp.end('Wow Again. No server restart. YEAH!!!1');
});

app.listen(80, function(){
	console.log('Yeah!');
});