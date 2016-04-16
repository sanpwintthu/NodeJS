// GET and POST

// http://mywebsite.com/?myFile=CSCZ.zip&version=1.0

var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));

app.get('/', function(req, resp){
//	resp.end(JSON.stringify(req.query));
	var response = "Hello! "+ req.query.firstName;
	resp.end(response);
});



app.listen(80, function(){
	console.log('listen at Port 1337');
});

// http://clan.codedammn.com > NodeJS + ExpressJS