const express = require('express')
const app = express() // open express server
const exphbs = require('express-handlebars') // handlebars logic

// all request will have to go thru this middleware
// all request will have to know that the public folder is where we put our static files
app.use(express.static('public'))

// setting dynamic view folders
app.engine('handlebars', exphbs(
  // handlebars config
  {
    defaultLayout: 'main',
    partialsDir: 'views/partials'
  }
))
app.set('view engine', 'handlebars')

// listening for request
app.get('/', function (req, res) {
  // this will be your search thru db
  var user = {
    name: 'brian',
    email: 'blee@email.com',
    isAdmin: true
  }
  var blogs = [
    {
      title: 'my blog post',
      content: 'here\'s my blogpost'
    },
    {
      title: 'my second blog post',
      content: 'here\'s my second blogpost'
    }
  ]
  res.render('index', {
    user: user,
    blogs: blogs
  })
})

app.get('/about', function (req, res) {
  res.render('about')
})

app.get('/faq', function (req, res) {
  res.render('faq')
})

app.post('/')

var port = process.env.PORT || 5000

app.listen(port, function () {
  console.log('express is running on port' + port)
})
