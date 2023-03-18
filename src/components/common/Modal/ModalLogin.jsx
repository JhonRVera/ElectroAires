import React from 'react';
import './modal.css'
const Modal = ({ isLogin, onClose }) => {
    if (!isLogin) return null;

    return (
        <div className="modal">
            <div className="modal__content modal__login">
                <h1>Inicio sesion</h1>
                <form className='login__content'>
                    <div className='field__input'>
                        <input type="text" name="usuario" placeholder="USUARIO" id="user" required />
                    </div>
                    <div className='field__input'>
                        <input type="password" name="contrasena" placeholder="CONTRASEÑA" id="pass" required />
                    </div>
                    <button className='login__button' type="submit">INICIAR SESION</button>
                    <button className="modal__close btn" onClick={onClose}>CERRAR VENTANA</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
