var http = require("http");
var url = require("url");
var fs = require('fs');

function start(){
	function onRequest(request,response){
		var pathname = url.parse(request.url).pathname;
		
		response.writeHead(200,{"Content-type":"text/plain"});
		response.write("hello World");
		response.end();
		console.log("request path " + pathname);
	};
	http.createServer(onRequest).listen(8888);
};
exports.start = start;
