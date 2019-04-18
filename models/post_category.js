const mongoose = require('mongoose')

let postCategorySchema = new mongoose.Schema({
    name: {type: String, required: true, max: 250}
})

module.exports = mongoose.model('PostCategory', postCategorySchema)
