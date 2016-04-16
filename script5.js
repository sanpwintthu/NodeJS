var http = require('http'); // http is a module
var server = http.createServer(engine);
server.listen(1337, function(){
	console.log('Server was hit by a request');
});


function engine(request, response) {

	//console.log(response);
	response.writeHead(200, {'Content-Type': 'text/plain', 'Balabla': 'from beyondplusmyanmar.com'});

	response.end('Hey there, from the server! :D. Request from page :'+ request.url);
}

//[protocol]://[subdomain].[websiteName].[tld]:[port]/[path]?[query]=[string]#[hash]