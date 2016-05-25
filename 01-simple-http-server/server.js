var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res){
    //console.log(req.headers);
    console.log('Request for '+req.url+' by method '+req.method);

    if (req.method == 'GET') {
        var fileUrl;

        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        var fileExt = path.extname(filePath);

        if (fileExt == '.html') {
            fs.exists(filePath, function(exists){
                if (!exists) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    var response404 = '<h3 style="text-align:center; background:#BABABA; padding:10px">'+
                                        'Error 404: '+fileUrl+' not found'+
                                        '</h3>';
                    res.end(response404);
                    return;
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                fs.createReadStream(filePath).pipe(res);
            });
        } else {
            res.writeHead(403, {'Content-Type': 'text/html'});
            var response403 = '<h3 style="text-align:center; background:#BABABA; padding:10px">'+
                                'Error 403: '+fileUrl+' not a HTML file'+
                                '</h3>';
            res.end(response403);
        }
    } else {
        res.writeHead(405, {'Content-Type': 'text/html'});
        var response405 = '<h3 style="text-align:center; background:#BABABA; padding:10px">'+
                            'Error 405: Method '+req.method+' not allowed'+
                            '</h3>';
        res.end(response405);
    }
});

server.listen(port, hostname, function(){
    console.log(`Server running as http://${hostname}:${port}/`);
});
