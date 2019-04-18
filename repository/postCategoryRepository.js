const categoryPostModel = require('../models/post_category')

/**
 * Create category post function
 * @param formData
 * @returns {Promise<any>}
 */
exports.create_category = (formData) => {
    let category = new categoryPostModel(formData)

    return new Promise((resolve, reject) => {
        category.save()
            .then(doc => {
                resolve(doc)
            })
            .catch(err => {
                reject(err)
            })
    })
}
