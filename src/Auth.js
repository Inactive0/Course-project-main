import React, { useState } from 'react';
import { registerUser, loginUser } from './api';

const Auth = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [userData, setUserData] = useState(null); // Для отображения данных пользователя

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            const response = await registerUser(formData);
            setUserData({ username: formData.username, email: formData.email });
            alert('Регистрация успешна!');
        } catch (error) {
            console.error('Ошибка регистрации:', error.response.data.message);
        }
    };

    const handleLogin = async () => {
        try {
            const response = await loginUser(formData);
            localStorage.setItem('token', response.data.token);
            setUserData({
                username: response.data.username,
                email: response.data.email,
            });
            alert('Вход выполнен успешно!');
        } catch (error) {
            console.error('Ошибка входа:', error.response.data.message);
        }
    };

    return (
        <div>
            <h1>Регистрация / Вход</h1>
            <input
                type="text"
                name="username"
                placeholder="Имя пользователя"
                value={formData.username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            <button onClick={handleLogin}>Войти</button>

            {userData && (
                <div>
                    <h2>Информация о пользователе</h2>
                    <p><strong>Имя пользователя:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                </div>
            )}
        </div>
    );
};

export default Auth;
