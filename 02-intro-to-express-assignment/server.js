var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./routes');

var hostname = 'localhost',
    port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

routes(app);

app.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
