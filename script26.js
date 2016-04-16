var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');

var session;

var app = express();

app.use('/cssFiles', express.static(__dirname + '/assets'));
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
	session.uniqueID = req.body.username;
	resp.redirect('/redirects');
});

app.get('/logout', function(req, resp){
	req.session.destroy();
	resp.redirect('/login');
});

app.get('/admin', function(req, resp){
	session = req.session;
	if(session.uniqueID != 'admin'){
		resp.send('Unauthorized access');
	}
	resp.send('You are the god.<a href="/logout">KILL SESSION</a>');
});

app.get('/redirects', function(req, resp){
	session = req.session;
	if(session.uniqueID == 'admin'){
		console.log(session.uniqueID);
		resp.redirect('/admin');
	} else {
		resp.send(req.session.uniqueID + ' not found <a href="/logout">KILL SESSION</a>');
	}
});
app.listen(80, function(){
	console.log('listen at Port 1337');
});

// http://clan.codedammn.com