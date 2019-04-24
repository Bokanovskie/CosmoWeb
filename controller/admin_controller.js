const articleCategoryRepository = require('../repository/article_category_repository')
const async = require('async')

exports.dashboard = (req, res, next) => {

    async.parallel({
        articleCategories: function (callback) {

            articleCategoryRepository.get_all_article_category()
                .then(doc => {
                    callback(null, doc)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, function (err, results) {

        if (err) { return next(err) }

        res.status(200).render('admin_dashboard.html', {'articleCategories': results.articleCategories})
    })

}
