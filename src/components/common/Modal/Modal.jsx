import React from 'react';
import './modal.css'
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <h1>Quienes somos</h1>
                <p>
                    En nuestro taller de reparación de aire acondicionado automotriz, contamos con más de 25 años de experiencia en el campo. Somos un equipo de profesionales altamente capacitados y comprometidos con brindar un servicio de calidad a nuestros clientes. <br />
                    <br />
                    Nuestro objetivo es proporcionar soluciones eficaces y duraderas a los problemas de aire acondicionado en vehículos, utilizando las herramientas y tecnologías más avanzadas del mercado. <br />
                    <br />
                    Además, nos esforzamos por mantenernos al día con las últimas tendencias y avances en la industria para ofrecer un servicio de vanguardia a nuestros clientes. <br />
                    <br />
                    En resumen, somos un equipo apasionado por nuestro trabajo, dedicado a proporcionar soluciones de calidad a los problemas de aire acondicionado automotriz, y comprometidos con la satisfacción total de nuestros clientes.
                </p>
                <button className="modal__close" onClick={onClose}>CERRAR VENTANA</button>
            </div>
        </div>
    );
};

export default Modal;
