const routes = require('express').Router()
const indexController = require('../controller/index_controller')

routes.get('/', indexController.index)

module.exports = routes
