const articleCategoryRepository = require('../repository/article_category_repository')

exports.create_article_category_get = (req, res) => {
    res.render('article_category/create_article_category.html')
}

exports.create_article_category_post = (req, res) => {
    const formData = req.body

    articleCategoryRepository.create_article_category(formData)
        .then(doc => {
            res.redirect(doc.url)
        }).catch(err => {
            console.log(err)
        })
}

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

exports.delete_article_category = (req, res) => {

}
