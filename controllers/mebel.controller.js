const Mebel = require("../models/Mebel.model");

module.exports.mebelController = {
  getAllMebel: async (req, res) => {
    const mebel = await Mebel.find();
    res.json(mebel);
  },//======вывод всей мебели

  getOneMebel: async (req, res) => {
    try {
      const mebel = await Mebel.findById(req.params.id)
      res.json(mebel)
    } catch (error) {
      res.json({error: error.message})
    }
  },//======вывод одной мебели

  getMebelByCategory: async (req, res) => {
    try {
      const mebel = await Mebel.find({category: req.params.id})
      res.json(mebel)
    } catch (error) {
      res.json({error: error.message})
    }
  },//======вывод мебели по категориям

  postMebel: async (req, res) => {
    try {
      const mebel = await Mebel.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        size: req.body.size,
        category: req.body.category
      })
      res.json(mebel)
    } catch (error) {
        res.json({error: error.message})
    }
  },//======добавление мебели

  deleteMebel: async (req, res) => {
    try {
        const mebel = await Mebel.findByIdAndRemove(req.params.id)
        res.json(mebel)
    } catch (error) {
        res.json({error: error.message})
    }
  }//======удаление мебели
};
