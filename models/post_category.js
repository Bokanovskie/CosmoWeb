const mongoose = require('mongoose')

let postCategorySchema = new mongoose.Schema({
    name: {type: String, required: true, max: 250}
})

// Virtual for post's url
postCategorySchema
    .virtual('url')
    .get(function () {
        return '/admin/post/category/' + this._id
    })

module.exports = mongoose.model('PostCategory', postCategorySchema)
