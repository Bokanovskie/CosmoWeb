const routes = require('express').Router()

const index = require('./index.js')
const admin = require('./admin.js')

routes.get('/', index)
routes.get('/admin', admin)

module.exports = routes
