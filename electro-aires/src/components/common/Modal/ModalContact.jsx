import React from 'react';
import './modal.css'
const Modal = ({ isContact, onClose }) => {
    if (!isContact) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <h1>CONTACTO</h1>

                <button className="modal__close" onClick={onClose}>CERRAR VENTANA</button>
            </div>
        </div>
    );
};

export default Modal;
