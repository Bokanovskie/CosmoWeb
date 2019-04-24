const categoryPostModel = require('../models/post_category')

exports.get_all_category_post = () => {
    return new Promise((resolve, reject) => {
        categoryPostModel.find({})
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
        })
    })
}

exports.get_category_post_by_id = (id) => {
    return new Promise((resolve, reject) => {
        categoryPostModel.findById(id)
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
        })
    })
}

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
