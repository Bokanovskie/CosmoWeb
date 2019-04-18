const postRepository = require('../repository/postRepository.js')

// Create post action GET
exports.create_post_action_get = (req, res) => {
    res.status(200).render('post/create_post.html')
}

// Create post action POST
exports.create_post_action_post = (req, res) => {
    const formData = req.body

    postRepository.create_post(formData)
        .then(doc => {
            res.redirect(doc.url)
        })
        .catch(err => {
            res.redirect('/admin')
        })
}

// Get post action by id
exports.post_action_get = (req, res) => {
    const postId = req.params.id

    if(postId){
        postRepository.get_post_by_id(postId)
            .then(post => {
                res.render('post/view_post.html', {'post': post})
            })
            .catch(err => {
                console.log(err)
            })
    }
}
