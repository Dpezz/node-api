var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

// parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// routes
app.use('/api', require('./routes'))

// start serve
var domain = 'http://localhost',
    port = 3000;
app.listen(port, function () {
    console.log('Node server running on ' + domain + ':' + port)
})