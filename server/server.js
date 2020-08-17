var path = require('path')
require('dotenv').config()
var express = require('express')
var app = express()
var port = 8000
var cors = require('cors')
var authenticator = require('./authenticator');
var logger = require('./logger')
var data = require('./data')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken")

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var urlpath = path.join(__dirname, '../frontend/build/')
// app.use(cors(corsOptions))
//1.
app.use(logger)
app.use(cors(corsOptions))
//2.
app.use(express.static(urlpath))
//3.
app.use(cookieParser())
app.use(bodyParser.json())
// app.use(authenticator);
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

app.post('/api/login', (req, res) => {
  var loginDetails = req.body
  console.log(loginDetails)
  // Validate that the user exists in the database/datafile
  // Decrypt password with bcrypt

  // The regester rout will encrypt the password and the post into database
  const token = jwt.sign({ "name": "Ruan", "id": "12334554" }, process.env.ACCESS_TOKEN_SECRET)
  res.cookie("token", token)
  res.json({ token: token })
})

app.post('/api/protected', authenticator, (req, res) => {
  res.json(req.user)
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})