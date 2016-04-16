var server = require('http'); // http is a module


server.createServer(engine).listen(1337); // leets

// function engine() {

// }

function engine(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain', 'Balabla': 'from beyondplusmyanmar.com'});

	response.end('Hey there, from the server! :D');
}

//[protocol]://[subdomain].[websiteName].[tld]:[port]/[path]?[query]=[string]#[hash]