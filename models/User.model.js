const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    lastname: String,
    login: String,
    password: String,
    email: String,
    age: Number
})
const User = mongoose.model('User', userSchema)
module.exports = User