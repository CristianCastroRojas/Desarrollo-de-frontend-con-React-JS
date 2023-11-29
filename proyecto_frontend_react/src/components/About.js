// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about-section">
      <div className="container">
        <div>
          <img
            src="/proyecto_frontend_react/Logos/Collage 2.png"
            alt=""
          />
        </div>
        <div>
          <h2>Reseña Historica</h2>
          <p>
            Es una organización constituida a inicio del año 2018 dedicada a la
            comercialización y distribución de auto partes nuevas en la ciudad
            de Cúcuta. Durante su operatividad logró expandirse en el territorio
            Nacional, logrando posicionarse en el mercado ofreciendo calidad en
            servicios y productos a su amplia cartera de clientes. Además de
            tener una extensa gama de productos con la calidad y certificación
            de todas las marcas originales del parque automotriz.
          </p>
          <h2>Misión</h2>
          <p>
            Hacer que nuestros clientes se sientan identificados con nuestra
            marca ya que de ellos está nuestro posicionamiento en el parque
            automotriz.
          </p>
          <h2>Visión</h2>
          <p>
            Como punto principal, tenemos la captación de nuestros clientes con
            la excelencia de nuestra calidad y servicio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
