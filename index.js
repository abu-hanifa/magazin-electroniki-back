require ('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(cors())
app.use(require('./routes/user.route'))
app.use(require('./routes/category.route'))

mongoose.connect(process.env.MONGO_SERVER)
.then(() => console.log("успешно"))
.catch(() => console.log("ошибка"))

app.listen(process.env.PORT, () => {
    console.log(`Сервер успешно запущен на ${process.env.PORT}`);
})