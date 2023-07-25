//variable declaration = require('protocol')
var http =  require('http');
var imp = require('./module');
//server creation
http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    //display the date on the screen by entering the port number
    res.write(imp.myDate());
    res.end();
}).listen(3456); //port number
