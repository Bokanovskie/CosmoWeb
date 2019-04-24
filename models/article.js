let mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 250},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'ArticleCategory', required: false}
})

// Virtual for article's url
articleSchema
    .virtual('url')
    .get(function () {
        return '/admin/article/' + this._id
    })

module.exports = mongoose.model('Article', articleSchema)
