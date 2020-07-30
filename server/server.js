var path = require('path')
var express = require('express')
var app = express()
var port = 8000
var authenticator = require('./authenticator');
var logger = require('./logger')
var data = require('./data')

var urlpath = path.join(__dirname, '../frontend/build/')
//1.
app.use(logger)
//2.
app.use(express.static(urlpath))
//3.
app.use(authenticator);
//4.
app.param('name', function (request, response, next) {
  request.lowerName = request.params.name.toLowerCase();
  next();
});


app.get('/api/categories/:name/exercises', function (request, response) {
  var results = [];
  // var lowerName = request.params.name.toLowerCase();
  for (var i = 0; i < data.exercises.length; i++) {
    if (data.exercises[i].category === request.lowerName) {
      results.push(data.exercises[i]);
    }
  }
  response.json(results);
});


app.get('/home', (req, res) => {
  res.redirect(301, '/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})