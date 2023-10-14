const mongoose = require("mongoose")

const phoneSchema = mongoose.Schema({
    image: String,
    brand: String,
    model: String,
    categoy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    },
    discription: String,
    instock: Boolean,
    price: String,
    storage: Number,
    amout: Number
    

})
const Phone = mongoose.model("Phone", phoneSchema)
module.exports = Phone