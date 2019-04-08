let mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    'title': String
})

module.exports = mongoose.model('Post', postSchema)
