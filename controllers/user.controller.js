const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
    getAllUser: async (req, res) => {
     const user = await User.find()
     res.json(user)
    }, //======вывод всех пользователей

  registration: async (req, res) => {
    const { login, password, name, lastname, age, email } = req.body;
    const candidate = await User.findOne({ login });
    if (candidate) {
      return res
        .status(401)
        .json({ error: "Пользователь с таким Логином уже существует" });
    }

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    const user = await User.create({
      name: name,
      login: login,
      password: hash,
      lastname: lastname,
      age: age,
      email: email,
    });
    res.json(user);
  }, //====== регистрация

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json({ error: "неверный логин или пароль" });
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json({ error: "неверный логин или пароль" });
      }
      const payload = {
        id: candidate._id,
        login: candidate.login,
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      res.json(token);
    } catch (error) {
      res.json(error.message);
    }
  } //======вход
};
