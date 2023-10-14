const {mebelController} = require('../controllers/mebel.controller')
const {Router} = require('express')
const router = Router()

router.get('/mebel', mebelController.getAllMebel) //======вывод всей мебели
router.get('/mebel/:id', mebelController.getOneMebel) //======вывод одной мебели
router.get('mebel/category/:id', mebelController.getMebelByCategory) //======вывод мебели по категориям
router.post('mebel', mebelController.postMebel) //======добавление мебели
router.delete('mebel', mebelController.deleteMebel) //======удаление мебели

module.exports = router