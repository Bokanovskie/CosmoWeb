const postCategoryRepository = require('../repository/postCategoryRepository')

exports.create_category_get = (req, res) => {
    res.render('category_post/create_category_post.html')
}

exports.create_category_post = (req, res) => {
    const formData = req.body

    postCategoryRepository.create_category(formData)
        .then(doc => {
            res.redirect(doc.url)
        }).catch(err => {
            console.log(err)
        })
}

exports.post_category_action_get = (req, res) => {
    const postCategoryId = req.params.id

    if (postCategoryId) {
        postCategoryRepository.get_category_post_by_id(postCategoryId)
            .then(categoryPost => {
                res.render('category_post/view_category_post.html', {'categoryPost': categoryPost})
            })
            .catch(err => {
                console.log(err)
            })
    }
}
