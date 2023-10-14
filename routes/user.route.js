const {userController} = require('../controllers/user.controller')
const {Router} = require('express')

const router = Router()

router.get('/user', userController.getAllUser) //======вывод всех пользователей
router.post('/user', userController.registration) //======регистрация
router.post('/login', userController.login) //======вход

module.exports = router