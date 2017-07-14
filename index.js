const express = require('express')
const app = express() // open express server

// all request will have to go thru this middleware
app.use(function (req, res, next) {
  console.log('first middleware')
  next()
})

// all request will have to know that the public folder is where we put our static files
app.use(express.static('public'))

// listening for request
app.get('/', function (req, res) {
  res.sendFile('index.html')
})

app.get('/about/:name', function (req, res) {
  res.send(req.params)
})

app.get('/faq', function (req, res) {
  res.send('faq page')
})

app.post('/')

var port = process.env.PORT || 5000

app.listen(port, function () {
  console.log('express is running on port' + port)
})
