const routes = require('express').Router()
const bodyParser = require('body-parser')

const adminController = require('../controller/admin_controller')
const articleController = require('../controller/article_controller')
const articleCategoryController = require('../controller/article_category_controller')

// create application x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

routes.get('/', adminController.dashboard)

// Post routes
routes.get('/article/create', articleController.create_article_action_get)
routes.post('/article/create', urlencodedParser, articleController.create_article_action_post)
routes.get('/article/:id', articleController.get_article)

// Category post route
routes.get('/article/category/create', articleCategoryController.create_article_category_get)
routes.post('/article/category/create', urlencodedParser, articleCategoryController.create_article_category_post)
routes.get('/article/category/:id', articleCategoryController.get_article_category)
routes.get('/article/category/delete/:id', articleCategoryController.delete_article_category)

module.exports = routes
