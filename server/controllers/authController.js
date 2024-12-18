const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Регистрация пользователя
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Проверяем, что все поля заполнены
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Все поля обязательны" });
        }

        // Проверяем, существует ли пользователь
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Пользователь уже существует" });
        }

        // Создаем нового пользователя
        const user = new User({ username, email, password });
        await user.save();

        // Возвращаем данные пользователя
        res.status(201).json({
            message: "Регистрация успешна",
            username: user.username,
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Проверяем, что все поля заполнены
        if (!email || !password) {
            return res.status(400).json({ message: "Все поля обязательны" });
        }

        // Ищем пользователя
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Неверные данные для входа" });
        }

        // Проверяем пароль
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Неверные данные для входа" });
        }

        // Генерируем токен
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Возвращаем токен и данные пользователя
        res.status(200).json({
            token,
            message: "Вход выполнен успешно",
            username: user.username,
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = { registerUser, loginUser };
