const postRepository = require('../repository/postRepository.js')

exports.create_post_action_get = (req, res) => {
    res.status(200).render('post/create_post.html')
}

exports.create_post_action_post = (req, res) => {
    const formData = req.body
    postRepository.create_post(formData)
}
