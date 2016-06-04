var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var config = require("./server_config.js");

var app = express();

app.use(express.static(__dirname + "./../public"));

app.use(bodyParser.json());

var mongoURI = config.MONGO_URI;
var port = config.PORT;

mongo.set("debug", true);
mongoose.connect(mongoURI, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("mongoose is ready");
  }
});

mongoose.connection.once("open", function() {
  console.log("Connected to mongoDB at", mongoURI);
  app.listen(port, function() {
    console.log("Searching for aliens on port" + port);
  });
});
