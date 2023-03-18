import React from 'react';
import '../assets/styles/pages/homePage/homePage.css';
import '../assets/styles/pages/homePage/mobile.css';
const HomePage = () => {
  return (
    <div className="img__background">
      <div className="home__content">
        <h1>Servicios de reparacion</h1>
        <p>¡Bienvenidos a Electro Aires & Aires!</p>
      </div>

      <div className="services__content">
        <div>
          <h3>Aires Acondicionados</h3>
          <p>Conocimientos para el adecuado
            manejo del sistema de refrigeracion
            de su vehiculo</p>
        </div>
        <div>
          <h3>Accesorios Automovil</h3>
          <p>Compresores, Evaporadores,
            Comandos, Electronica</p>
        </div>
        <div>
          <h3>Reparacion Averias</h3>
          <p>Mantimiento, cambion de accesorios,
            Reparación
          </p>
        </div>
      </div>

      <div className="location__content">
        <h1>Ven a visitarnos</h1>
        <p>L Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur blanditiis unde dolore corrupti ad. Iste vitae mollitia veniam non earum impedit incidunt, doloremque aut cupiditate quae molestiae a minima nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, pariatur. Quibusdam, facilis excepturi tempore corrupti voluptate inventore quaerat natus error voluptatibus beatae dolor vitae atque modi enim totam. Esse, veritatis?</p>
        <a href="https://goo.gl/maps/qJ6Hhi5zfQJFfv1VA" target='_blank'>
          <button >Ven a nuestro taller</button>
        </a>
      </div>

      <div className="services__content scheduled__content">
        <div>
          <h3>Llamanos</h3>
          <p>Tel: 914-123-456</p>
        </div>
        <div>
          <h3>Escribenos</h3>
          <p>info@misitio.com</p>
        </div>
        <div>
          <h3>Horarios</h3>
          <p>Lun - Vie : 08:00 am - 06:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
