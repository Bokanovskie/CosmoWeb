
const express = require('express')
const nunjucks = require('nunjucks')
const app = express()

app.use(express.static('public'))

nunjucks.configure(
  'views', {
    autoescape: true,
    express: app
  })

app.get('/', function (req, res) {
  res.render('index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

