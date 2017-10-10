var express = require('express');
var app = express();
var port = 3333;
var mongoose = require('mongoose');
var Task = require('./api/models/todoListModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {
  useMongoClient: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('rest api server started on', port);
