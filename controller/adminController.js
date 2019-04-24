const postCategoryRepository = require('../repository/postCategoryRepository')
const async = require('async')

exports.dashboard = (req, res, next) => {

    async.parallel({
        postCategories: function (callback) {

            postCategoryRepository.get_all_category_post()
                .then(doc => {
                    callback(null, doc)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, function (err, results) {

        if (err) { return next(err) }

        res.status(200).render('admin_dashboard.html', {'postCategories': results.postCategories})
    })

}
