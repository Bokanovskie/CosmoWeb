const articleCategoryModel = require('../models/article_category')

/**
 * Get all article category
 *
 * @returns {Promise<any>} | article category list or error
 */
exports.get_all_article_category = () => {
    return new Promise((resolve, reject) => {
        articleCategoryModel.find({})
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
        })
    })
}

exports.get_article_category_by_id = (id) => {
    return new Promise((resolve, reject) => {
        articleCategoryModel.findById(id)
            .then(doc => {
                resolve(doc)
            }).catch(err => {
                reject(err)
        })
    })
}

/**
 * Create category post function
 *
 * @param formData
 * @returns {Promise<any>} | Created article category or error
 */
exports.create_article_category = (formData) => {
    let category = new articleCategoryModel(formData)

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

/**
 * Delete article category
 *
 * @param id
 * @returns {Promise<any>}
 */
exports.delete_article_category = (id) => {

    return new Promise((resolve, reject) => {
        articleCategoryModel
            .findOneAndDelete({
                '_id': id
            })
            .then(response => {
                resolve(true)
            })
            .catch(err => {
                reject(err)
            })
    })
}
