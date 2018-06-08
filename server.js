var express = require("express");
var bodyParser = require("body-parser");
mongoose = require("mongoose");
require("./config/db");
var app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));
app.use(bodyParser.json({limit: '50mb', parameterLimit: 1000000}));

var register = require("./server/routes/register");

app.post('/login', register.loginUser);
app.post('/register',register.registerUser );
app.put('/api/forgotPassword', register.forgotPassword );

app.use('/', express.static(__dirname + '/'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function(req, res) {
    res.send(__dirname + '/index.html');
})

app.listen(3000, function () {
    console.log("Server is running at port: 3000");
})