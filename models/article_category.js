const mongoose = require('mongoose')

let articleCategorySchema = new mongoose.Schema({
    name: {type: String, required: true, max: 250}
})

// Virtual for article category's url
articleCategorySchema
    .virtual('url')
    .get(function () {
        return '/admin/article/category/' + this._id
    })

module.exports = mongoose.model('ArticleCategory', articleCategorySchema)
