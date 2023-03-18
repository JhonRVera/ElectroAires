import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import './navBar.css';
import Modal from '../../common/Modal/Modal';
import ModalContact from '../../common/Modal/ModalContact';
import ModalLogin from '../../common/Modal/ModalLogin';

export const NavBar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isOpen,setIsOpen]= useState(false);
    const [isContact,setIsContact] = useState(false);
    const [isLogin,setIsLogin] = useState(false);

    return (
        <div className="navbar">
            <div className="nav__logo">Electro Aires</div>
            <span className='sub__title'>AIRE ACONDICIONADO AUTOMOTRIZ</span>

        <div className={`nav__items ${isOpened && "open"}`}>
        <FontAwesomeIcon icon={faCoffee} /><a onClick={() => setIsOpen(true)} href="#">Quienes somos</a>
        <FontAwesomeIcon icon={faEnvelopeOpenText} /> <a onClick={() => setIsContact(true)} href="#">Contacto</a>
        <FontAwesomeIcon icon={faCircleUser} /><a onClick={() => setIsLogin(true)} href="#">Inicio sesion</a>
            </div>
            <div className={`nav__toggle ${isOpened && "open"}`} onClick={() => setIsOpened(!isOpened)} >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <ModalContact isContact={isContact} onClose={() => setIsContact(false)} />
            <ModalLogin isLogin={isLogin} onClose={() => setIsLogin(false)} />
        </div>
    );
}

export default NavBar;