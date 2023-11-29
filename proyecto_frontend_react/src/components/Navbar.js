// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav id="inicio">
      <div className="container">
        {/* logo-brand */}
        <a href="#contact-section">
          <img
            src="/proyecto_frontend_react/Logos/autovenz.png"
            className="logo-brand"
            alt=""
          />
        </a>
        {/* icono de menu */}
        <div className="toggle-btn">
          <i className="fa fa-bars" id="menu-btn-toggle"></i>
        </div>
        {/* botones de navegacion */}
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#about-section">Quienes Somos</a>
          </li>
          <li>
            <a href="#projects-section">Nuestras Marcas</a>
          </li>
          <li>
            <a href="#contact-section">Contactos</a>
          </li>
        </ul>
        {/* boton de pagos */}
        <a
          href="https://www.zonapagos.com/t_autovenzsas/pagos.asp"
          target="_blank"
        >
          <img
            src="/proyecto_frontend_react/Logos/pse-removebg-preview.png"
            className="logo-pse"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
