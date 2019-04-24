const articleRepository = require('../repository/article_repository')
const articleCategoryRepository = require('../repository/article_category_repository')

const async = require('async')

/**
 * Create article action GET
 * @param req | Request
 * @param res | Response
 */
exports.create_article_action_get = (req, res) => {

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

        res.status(200).render('article/create_article.html', {'articleCategories': results.articleCategories})

    })

}

/**
 * Create article action POST
 * @param req | Request
 * @param res | Response
 */
exports.create_article_action_post = (req, res) => {
    const formData = req.body

    articleRepository.create_article(formData)
        .then(doc => {
            res.redirect(doc.url)
        })
        .catch(err => {
            res.redirect('/admin')
        })
}

/**
 * Get article action by id
 * @param req | Request
 * @param res | Response
 */
exports.get_article = (req, res) => {
    const articleId = req.params.id

    if (articleId) {
        articleRepository.get_article_by_id(articleId)
            .then(article => {
                res.render('article/view_article.html', {'article': article})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

/**
 * Delete article by id
 *
 * @param req
 * @param res
 */
exports.delete_article = (req, res) => {
    const articleId = req.params.id

    if (articleId) {
        articleRepository.delete_article(articleId)
            .then(result => {
                res.redirect('/admin')
            }).catch(err => {

        })
    }
}
