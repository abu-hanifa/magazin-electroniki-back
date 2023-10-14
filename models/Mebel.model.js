const mongoose = require('mongoose')
const mebelSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    size: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})
const Mebel = mongoose.model('Mebel', mebelSchema)
module.exports = Mebel