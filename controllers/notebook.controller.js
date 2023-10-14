const Notebook = require("../models/Notebook.model")

module.exports.notebookControllers = {
    //Добавление продукта
createNotebook: async(req,res)=>{
    try {
        const data = await Notebook.create({
            brand: req.body.brand,
            model:req.body.model,
            price: req.body.price,
            inStock: req.body.inStock,
            amount: req.body.amount,
            description: req.bod.description,
            gpu: req.body.gpu,
            image: req.body.image,
            cpu: req.body.cpu,
            ssd: req.body.ssd,
            ram: req.body.ram,
            diagonal: req.body.diagonal,
            hertz: req.body.hertz,
        })
        return res.json(data)
    } catch (error) {
        res.json(error)
    }
},
//Изменение продукта
patchNotebook: async (req,res)=>{
    try {
        const data = await Notebook.findByIdAndUpdate(req.params.id, req.body)
    } catch (error) {
        res.json(error)
    }
},
// Удаление продукта
deleteNotebook: async (req,res)=>{
    try {
        const data = await Notebook.findByIdAndDelete(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр продуктов
getNotebook: async (req,res)=>{
    try {
        const data = await Notebook.find()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
// Просмотр одного продукта
getNotebook: async (req,res)=>{
    try {
        const data = await Notebook.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json(error)
    }
},
getAllCategories: async (req, res) => {
    const accessories = await Notebook.find({category: req.params.id})
    res.json(accessories)
},
 
}