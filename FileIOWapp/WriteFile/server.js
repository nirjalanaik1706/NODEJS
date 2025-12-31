var http = require('http');
var fs = require('fs');

var onRequestHandler = function (request, response) {
    var pathname ="./"+ request.url;
    //arrow function
    //lambada function
    //inline function
    fs.readFile(pathname, (err, data) => {
        if (err) {
            console.log("Something went wrong!");
            console.log(err);
            response.writeHead(404, { 'Content-Type': 'text/html' });
        }
        else {
            response.writeHead(404, { 'Content-Type': 'text/html' });
            response.write(data.toString());
        }
        response.end();
    });
}
var server = http.createServer(onRequestHandler);
server.listen(8888);
console.log("HTTP server is Listening on port no. 8888");