const {categoryController} = require('../controllers/category.controller')
const {Router} = require('express')
const router = Router()

router.get('category', categoryController.getCategory) //====== вывод всех категорий
router.post('category', categoryController.postCategory) //====== добавление категорий

module.exports = router