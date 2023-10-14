const mongoose = require("mongoose")

const notebookSchema = new mongoose.Schema({
brand:String,
model:String,
price: Number,
inStock: Boolean,
amount: Number,
description: String,
gpu: String,
image: String,
cpu: String,
ssd: String,
ram: String,
diagonal: Number,
hertz: Number,
category:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
},
})
const Notebook = mongoose.model("Notebook", notebookSchema)
module.exports = Notebook