const postModel = require('../models/post.js')

exports.create_post = (formData) => {
    let post = new postModel(formData)

    post.save()
        .then(doc => {
            console.log(doc)
        }).catch(err => {
            console.log(err)
    })
}
