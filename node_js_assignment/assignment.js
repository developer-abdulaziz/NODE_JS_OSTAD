var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    if(req.url == "/"){
        var myData = fs.readFileSync('./index.html');
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(myData);
        res.end();
    }
    else if(req.url == "/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is my About page');
        res.end();
    }
    else if(req.url == "/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('This is my Contact page');
        res.end();
    }
    else if(req.url == "/file-write"){
        fs.writeFile('demo.txt', 'hello world',function(){
            res.end();
        })
    }
})

server.listen(6080,function(){
    console.log('Node Js server run.......');
})
