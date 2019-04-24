const articleModel = require('../models/article.js')

/**
 * Get all articles
 *
 * @returns {Promise<any>}
 */
exports.get_all_article = () => {
    return new Promise((resolve, reject) =>  {
        articleModel.find({})
            .then(docs => {
                resolve(docs)
            }).catch(err => {
                reject(err)
        })
    })
}

/**
 * Get article by id
 *
 * @param id | post id
 */
exports.get_article_by_id = (id) => {
    return new Promise((resolve, reject) => {
        if(id){
            articleModel.findById(id)
                .populate('category')
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
 *
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

exports.update_article = (formData) => {

    return new Promise((resolve, reject) => {
        articleModel.findOneAndUpdate({'_id': formData._id}, formData)
            .then(result => {
                resolve(true)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.delete_article = (id) => {

    return new Promise((resolve, reject) => {
        articleModel
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
