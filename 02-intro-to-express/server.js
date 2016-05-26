var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var hostname = 'localhost',
    port = 3000;

var app = express();
app.use(morgan('dev'));

var bikeRouter = express.Router();
bikeRouter.use(bodyParser.json());

bikeRouter.route('/')
    .all(function(req, res, next){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get(function(req, res, next){
        res.end('I will send all bikes to you!');
    })
    .post(function(req, res, next){
        res.end('Will add the bike: '+req.body.name+' with details: '+req.body.description);
    })
    .delete(function(req, res, next){
        res.end('Deleting all bikes');
    });

bikeRouter.route('/:Id')
    .all(function(req, res, next){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })
    .get(function(req, res, next){
        res.end('Will send details of bike: '+req.params.Id+' to you!');
    })
    .put(function(req, res, next){
        res.write('Updating the bike: '+req.params.Id+'\n');
        res.end('Will update the bike: '+req.body.name+' with details: '+req.body.description);
    })
    .delete(function(req, res, next){
        res.end('Deleting the bike: '+req.params.Id);
    });

app.use('/bikes', bikeRouter);

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function(){
    console.log(`Server running on http://${hostname}:${port}/`);
});
