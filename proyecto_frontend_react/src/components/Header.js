// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          los expertos <br />en autopartes Genuinas para tu vehiculo
        </h1>
        <a className="custom-button" href="#projects-section">
          CONOCE NUESTRAS MARCAS
        </a>
      </div>
      <div>
        <img
          src="/proyecto_frontend_react/Logos/collage1.png"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
