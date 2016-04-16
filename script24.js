var express = require('express');
//var cookieParser = require('cookie-parser');

var app = express();
var router = express.Router();

app.use('/users', router);

// router.get('/:username', function(req, resp){
// 	resp.end(JSON.stringify(req.params));
// });

// router.get('/:username/:field/:doThat', function(req, resp){
// 	resp.end(JSON.stringify(req.params));
// });

router.get('/:username(\\w+)', function(req, resp){
	resp.end(JSON.stringify(req.params));
});
app.listen(80, function(){
	console.log('I\'m listeining....');
});

//http://localhost/users/anything/sss/ss