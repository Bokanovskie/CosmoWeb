const articleModel = require('../models/article.js')

/**
 * Get article by id
 * @param id | post id
 */
exports.get_article_by_id = (id) => {
    return new Promise((resolve, reject) => {
        if(id){
            articleModel.findById(id)
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
 * Create article function
 * @param formData
 */
exports.create_article = (formData) => {
    let article = new articleModel(formData)

    return new Promise((resolve, reject) => {
        article.save()
            .then(doc => {
                resolve(doc)
            })
            .catch(err => {
                reject(err)
            })
    })
}
