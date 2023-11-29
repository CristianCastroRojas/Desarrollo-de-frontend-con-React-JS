// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="container">
        <h2>contactos</h2>
        <div className="contact-section-content">
          <div className="contact-half-section">
            <ul>
              <li>
                <strong>Sucursal Cúcuta</strong> <br />
                Anillo Vial Oriental <br />
                Parque Empresarial Bocono - Bodega 3 <br />
                Cúcuta - Norte de Santander
              </li>
              <li>
                <strong>Sucursal Medellin</strong> <br />
                Carrera 80 N 45GG-66 <br />
                Local 101 Edif. Torre 80 <br />
                Medellin - Antioquia
              </li>
              <li>
                <strong>Telefono</strong> <br />
                Cúcuta - 5837418 <br />
                Medellin - 316 522 6695
              </li>
              <li>
                <strong>Email</strong> <br />
                administracion@autovenz.com <br />
                administracionmedellin@autovenz.com <br />
                ventas@autovenz.com
              </li>
              <li>
                <a
                  className="whatsapp-contact"
                  href="https://api.whatsapp.com/send?phone=573028382950"
                  target="_blank"
                >
                  <img
                    src="/proyecto_frontend_react/Logos/whatsapp-logo.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-half-section">
            <form>
              <div>
                <label htmlFor="name">
                  <strong>NOMBRE COMPLETO</strong>
                </label>
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="phone">
                  <strong>TELEFONO</strong>
                </label>
                <input type="text" id="phone" />
              </div>
              <div>
                <label htmlFor="city">
                  <strong>CIUDAD</strong>
                </label>
                <input type="text" id="city" />
              </div>
              <div>
                <label htmlFor="email">
                  <strong>CORREO ELECTRONICO</strong>
                </label>
                <input type="email" id="email" />
              </div>
              <div>
                <label htmlFor="description">
                  <strong>DESCRIPCION</strong>
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="8"
                ></textarea>
              </div>
              <div>
                <button className="custom-button" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;
