//http://localhost/howToControlThis/this/asdfsdf

var express = require('express');
//var cookieParser = require('cookie-parser');

var app = express();
var router = express.Router();

app.use('/myFirstRoute', router);

router.get('/heyThereFirstRoute', function(req, resp){
	resp.end('What is going on!');
});

router.get('/heyThereFirstRouteAgain', function(req, resp){
	resp.end('What is going on there, this is a bit different!');
});

app.get('/heyThereFirstRoute', function(req, resp){
	resp.end('What is going on!');
});
app.listen(80, function(){
	console.log('I\'m listeining....');
});