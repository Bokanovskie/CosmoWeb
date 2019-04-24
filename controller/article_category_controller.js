const articleCategoryRepository = require('../repository/article_category_repository')

/**
 * Create article category GET method
 *
 * @param req
 * @param res
 */
exports.create_article_category_get = (req, res) => {
    res.render('article_category/create_article_category.html')
}

/**
 * Create article category POST method
 *
 * @param req
 * @param res
 */
exports.create_article_category_post = (req, res) => {
    const formData = req.body

    articleCategoryRepository.create_article_category(formData)
        .then(doc => {
            res.redirect('/admin')
        }).catch(err => {
            console.log(err)
        })
}

exports.update_article_category_action_get = (req, res, next) => {
    const articleCategoryId = req.params.id

    if (articleCategoryId) {
        articleCategoryRepository.get_article_category_by_id(articleCategoryId)
            .then(articleCategory => {
                res.render('article_category/update_article_category.html', {'articleCategory': articleCategory})
            }).catch(err => {
                next(err)
        })
    }
}

/**
 * Get article category view by id
 *
 * @param req
 * @param res
 */
exports.get_article_category = (req, res) => {
    const articleCategoryId = req.params.id

    if (articleCategoryId) {
        articleCategoryRepository.get_article_category_by_id(articleCategoryId)
            .then(articleCategory => {
                res.render('article_category/view_article_category.html', {'articleCategory': articleCategory})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

/**
 * Delete article category by id
 *
 * @param req
 * @param res
 */
exports.delete_article_category = (req, res) => {
    const articleCategoryId = req.params.id

    if (articleCategoryId) {
        articleCategoryRepository.delete_article_category(articleCategoryId)
            .then(result => {
                res.redirect('/admin')
            })
            .catch(err => {

        })
    }
}
