const Phone = require('../models/Phone.model')
module.exports.phoneController = {
    getPhone: async (req, res) => {
        const phone = await Phone.find()
        res.json(phone)
    }, //=====Вывод всех телефонов

    getAllPhone: async (req, res) => {
        try {
            const phone = await Phone.findById(req.params.id)
            res.json(phone)
        } catch (error) {
            res.json({error: error.message})
        }
    }, //===== Вывод одного телефона

    getPhoneCategory: async (req, res) => {
        try {
            const phone = await Phone.find({category: req.params.id})
            res.json(phone)
        } catch (error) {
            res.json({error: error.message})
        }
    }, //===== Вывод телефонов по категории

    postPhone: async (req, res) => {
        try {
            const phone = await Phone.create({
                image: req.body.image,
                brand: req.body.brand,
                model: req.body.model,
                categoy: req.body.category,
                discription: req.body.discription,
                instock: req.body.instock,
                price: req.body.price,
                storage: req.body.storage,
                amout: req.body.amout
            })
            res.json(phone)
        } catch (error) {
            res.json({error: error.message})
        }
    }, //===== Добавление телефона

    deletePhone: async (req, res) => {
        try {
            const phone = await Phone.findByIdAndDelete(req.params.id)
            res.json(phone)
        } catch (error) {
            res.json({error: error.message})
        }
    } //===== Удаление телефона
}