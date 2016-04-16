var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(sessions({
	secret: '#@$@#$@#$!@$@#$%@#%$%$#asdfadf^asf',
	resave: false,
	saveUninitialized: true
}));

app.get('/login', function(req, resp){
	session = req.session;
	if(session.uniqueID){
		resp.redirect('/redirects');
	}

	resp.sendFile('./files/login.html', {root: __dirname});
});

app.post('/login', function(req, resp){
	//resp.end(JSON.stringify(req.body));
	session = req.session;
	if(session.uniqueID){
		resp.redirect('/redirects');
	}
	if(req.body.username == 'admin' && req.body.password == 'admin'){
		session.uniqueID = req.body.username;
	}
	resp.redirect('/redirects');
});

app.get('/logout', function(req, resp){
	req.session.destroy();
});

app.get('/redirects', function(req, resp){
	session = req.session;
	if(session.uniqueID){
		console.log(session.uniqueID);
		resp.redirect('/admin');
	} else {
		resp.end('Who are you?? <a href="/logout">KILL SESSION</a>');
	}
});
app.listen(80, function(){
	console.log('listen at Port 1337');
});

// http://clan.codedammn.com