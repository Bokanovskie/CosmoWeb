let mongoose = require('mongoose')

let articleSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 250},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'ArticleCategory', required: false},
    created_at: {type: Date, default: Date.now},
    content: {type: String, required: true}
})

// Virtual for article's url
articleSchema
    .virtual('url')
    .get(function () {
        return '/admin/article/' + this._id
    })

module.exports = mongoose.model('Article', articleSchema)
