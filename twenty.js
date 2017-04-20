var http = require('http');
var request = require('request');

http.createServer(function(req, res){
    request.post({
      url:'http://ycchen.im.ncnu.edu.tw/join.php',
      form:{
        "A":"apple",
        "M":"Moomoo"
      }
    },function(error, response, body){
        res.writeHead(200, {'Content-Type': 'yexy/html'});
        res.write(body);
        res.end('Hello Moomoo!');
    });
}).listen('8000','127.0.0.1');