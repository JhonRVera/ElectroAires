import React, {useState} from 'react';
import './navBar.css';
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="navbar">
            <div className="nav__logo">Electro Aires</div>
        <div className={`nav__items ${isOpen && "open"}`}>
                <a href="">Contacto</a>
                <a href="">Quienes somos</a>
                <a href="">Inicio sesion</a>
            </div>
            <div className={`nav__toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default NavBar;