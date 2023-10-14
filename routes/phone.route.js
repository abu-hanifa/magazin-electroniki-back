const {phoneController} = require("../controllers/phone.controller")
const {Router} = require("express")
const router = Router()

router.get('phone', phoneController.getPhone) //===== Вывод всех телефонов
router.get('phone/:id', phoneController.getAllPhone) //===== Вывод одного телефона
router.get('phone/category/:id', phoneController.getPhoneCategory) //===== Вывод теленов по категории
router.post('phone', phoneController.postPhone) //===== Добавление телефона
router.delete('phone', phoneController.deletePhone) //===== Удаление телефона

module.exports = router