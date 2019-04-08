const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes/routing.js')

const app = express()

app.use(express.static('public'))

nunjucks.configure(
  'views', {
    autoescape: true,
    express: app
  })

app.use('/', routes)
app.use('/admin', routes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

