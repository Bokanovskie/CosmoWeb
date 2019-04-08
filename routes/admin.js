const routes = require('express').Router()

routes.get('/admin', (req, res) => {
    res.status(200).render('admin_dashboard.html')
})

module.exports = routes
