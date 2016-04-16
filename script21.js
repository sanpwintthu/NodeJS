var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, resp){
	resp.cookie('myFirstCookie', 'looks Good');
	resp.end('Wow');
});

app.get('/removeCookie', function(req, resp){
	resp.clearCookie('myFirstCookie', 'looks Good');
	resp.end('Wow');
});

app.listen(80, function(){
	console.log('Yeah!');
});