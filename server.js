const express = require('express')
const nunjucks = require('nunjucks')
const indexRouter = require('./routes/index.js')
const adminRouter = require('./routes/admin')

const app = express()

app.use(express.static('public'))

nunjucks.configure(
  'views', {
    autoescape: true,
    express: app
  })

app.use('/', indexRouter)
app.use('/admin', adminRouter)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

