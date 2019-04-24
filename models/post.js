let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 250},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'PostCategory', required: false}
})

// Virtual for post's url
postSchema
    .virtual('url')
    .get(function () {
        return '/admin/post/' + this._id
    })

module.exports = mongoose.model('Post', postSchema)
