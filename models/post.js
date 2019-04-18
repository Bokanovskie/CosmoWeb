let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 250},
})

// Virtual for post's url
postSchema
    .virtual('url')
    .get(function () {
        return '/post/' + this._id
    })

module.exports = mongoose.model('Post', postSchema)
