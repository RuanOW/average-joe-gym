var path = require('path')
var express = require('express')
var app = express()
var port = 8000
var logger = require('./logger')

var urlpath = path.join(__dirname, '../frontend/build/')

app.use(logger)
app.use(express.static(urlpath))

app.get('/api/v1/categories', (req, res) => {
  var categories = ['aerobic', 'strength', 'balance', 'flexibility']
  res.json(categories)
})

app.get('/home', (req, res) => {
  res.redirect(301, '/')
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})