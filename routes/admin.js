const routes = require('express').Router()

const adminController = require('../controller/adminController')
const postController = require('../controller/postController')

routes.get('/', adminController.dashboard)

routes.get('/create/post', postController.create_product)

module.exports = routes
