const postModel = require('../models/post.js')

/**
 * Get post by id
 * @param id | post id
 */
exports.get_post_by_id = (id) => {
    return new Promise((resolve, reject) => {
        if(id){
            postModel.findById(id)
                .then(doc => {
                    resolve(doc)
                })
                .catch(err => {
                    reject(err)
                })
        }
    })
}

/**
 * Create post function
 * @param formData
 */
exports.create_post = (formData) => {
    let post = new postModel(formData)

    return new Promise((resolve, reject) => {
        post.save()
            .then(doc => {
                resolve(doc)
            })
            .catch(err => {
                reject(err)
            })
    })
}
