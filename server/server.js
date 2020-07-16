var express = require('express')
var app = express()
var port = 8000

app.get('/', (req, res) => {
  res.send('<h3>Hello World</h3>')
})

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