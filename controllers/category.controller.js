const Category = require('../models/Category.model')

module.exports.categoryController = {
    getCategory: async (req, res) => {
        const category = await Category.find()
        res.json(category)
    }, //======вывод всех категорий
    postCategory: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name
            })
             res.json(category)
        } catch (error) {
            res.json({error: error.message})
        }
    }//======добавление категории
}