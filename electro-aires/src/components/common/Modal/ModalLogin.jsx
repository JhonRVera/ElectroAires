import React, { useState } from 'react';
import axios from 'axios';
import './modal.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isLogin, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('/login/', { username, password })
            .then(response => {
                if (response.data.success) {
                    // redirigir a la página principal de la aplicación
                    navigate('/dashboard');
                } else {
                    setError('Invalid username or password');
                }
            })
            .catch(error => {
                setError('An error occurred while logging in');
            });
    };

    if (!isLogin) return null;

    return (
        <div className="modal">
            <div className="modal__content modal__login">
                <h1>Inicio sesion</h1>
                <form className='login__content' onSubmit={handleSubmit}>
                    <div className='field__input'>
                        <input type="text" name="usuario" placeholder="USUARIO" id="user" value={username} onChange={e => setUsername(e.target.value)} required />
                    </div>
                    <div className='field__input'>
                        <input type="password" name="contrasena" placeholder="CONTRASEÑA" id="pass" value={password} onChange={e => setPassword(e.target.value)} required />
                    </div>
                    {error && <div>{error}</div>}
                    <button className='login__button' type="submit">INICIAR SESION</button>
                    <button className="modal__close btn" onClick={onClose}>CERRAR VENTANA</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
