import React from 'react';
import './footer.css';
export const Footer = () => {
  return (
    <footer className="footer__content">
      <div>
        <h3>Mas de 25 años de experiencia</h3>
        <p>Tenemos la suficiente experiencia y conocimientos para el adecuado
          manejo del sistema de refrigeracion
          de su vehiculo</p>
      </div>
      <div>
        <h3>Servicios</h3>
        <ul>
          <li>- Reparacion</li>
          <li>- Mantenimiento</li>
          <li>- Venta de partes</li>
          <li>- Instalacion</li>
          <li>- Servicios electrico</li>
          <li>- Todo lo relacionado con AC automotriz</li>
        </ul>
      </div>
      <div>
        <h3>Visitanos</h3>
        <p>Mantimiento, cambion de accesorios,
          Reparación
        </p>
      </div>
    </footer>
  );
}

export default Footer;