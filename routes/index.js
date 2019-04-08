const routes = require('express').Router()
const indexController = require('../controller/indexController')

routes.get('/', indexController.index)

module.exports = routes
