//variable declaration
var http = require('http');
//mannual server creation
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    //user requet url
    res.write(req.url);
    res.end();
}).listen(2000);
