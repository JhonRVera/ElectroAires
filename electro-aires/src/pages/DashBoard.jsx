import React from 'react';
import '../assets/styles/pages/dashBoard/dashBoard.css';
import '../assets/styles/pages/dashBoard/mobile.css';

import { FaCar, FaSearch, FaRegFileAlt, FaColumns, FaCog } from "react-icons/fa";

const DashBoard = () => {
    let iconStyles = { color: "white", fontSize: "25px" };
    return (
        <>
            <div className="dashboard__menu">
                <h3>EA</h3>
                <ul>
                    <li><a href=""><FaCar style={iconStyles} /></a></li>
                    <li><a href=""><FaSearch style={iconStyles} /></a></li>
                    <li><a href=""><FaRegFileAlt style={iconStyles} /></a></li>
                    <li><a href=""><FaColumns style={iconStyles} /></a></li>
                    <li><a href=""><FaCog style={iconStyles} /></a></li>
                </ul>
            </div>
            <div className='dashboard__content field__input'>
                <h1>Ingreso vehiculo</h1>
                <form action="" method="post">
                    <input type="date" placeholder='Fecha de ingreso' />
                    <input type="text" placeholder='Tipo vehiculo' />
                    <input type="text" placeholder='Placa' />
                    <input type="text" placeholder='Descripcion arreglo' />
                    <input type="text" placeholder='Valor repuestos' />
                    <input type="text" placeholder='Valor mano de obra' />
                </form>
                <h2>Valor Total : <span>123123123 $</span></h2>
                <button className='clear modal__close'>GUARDAR VEHICULO</button>
                <button className='clear modal__close'>LIMPIAR</button>
            </div>
        </>
    )
}

export default DashBoard;