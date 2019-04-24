const articleRepository = require('../repository/article_repository')

/**
 * Create article action GET
 * @param req | Request
 * @param res | Response
 */
exports.create_article_action_get = (req, res) => {
    res.status(200).render('article/create_article.html')
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

    if(articleId){
        articleRepository.get_article_by_id(articleId)
            .then(article => {
                res.render('article/view_article.html', {'article': article})
            })
            .catch(err => {
                console.log(err)
            })
    }
}
