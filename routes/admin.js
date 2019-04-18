const routes = require('express').Router()
const bodyParser = require('body-parser')

const adminController = require('../controller/adminController')
const postController = require('../controller/postController')

// create application x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get('/', adminController.dashboard)

routes.get('/post/create', postController.create_post_action_get)
routes.post('/post/create', urlencodedParser, postController.create_post_action_post)

routes.get('/post/:id', postController.post_action_get)

module.exports = routes
