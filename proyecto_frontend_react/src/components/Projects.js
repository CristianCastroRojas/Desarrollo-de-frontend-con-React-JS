// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects-section">
      <div className="container">
        <h2>Nuestras Marcas</h2>
        <div>
          <div className="project">
            <div>
              <h3>apr engine parts</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam illo harum magnam id earum vel ex officia tempore
                cumque quos, pariatur nulla sint perferendis libero laboriosam
                inventore omnis, molestiae voluptas dicta. Provident suscipit
                maxime obcaecati, eligendi in minima adipisci magni placeat
                nobis culpa sint a reiciendis modi illo dolores voluptate?
              </p>
              <a
                className="custom-button-1"
                href="Catalogo/LP_APR_.pdf"
                target="_blank"
              >
                DESCARGA NUESTRO CATALOGO
              </a>
            </div>
            <div>
              <img src="/proyecto_frontend_react/Logos/apr.png" alt="" />
            </div>
          </div>
          <div className="project">
            <div>
              <h3>rubber steel parts</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam illo harum magnam id earum vel ex officia tempore
                cumque quos, pariatur nulla sint perferendis libero laboriosam
                inventore omnis, molestiae voluptas dicta. Provident suscipit
                maxime obcaecati, eligendi in minima adipisci magni placeat
                nobis culpa sint a reiciendis modi illo dolores voluptate?
              </p>
              <a
                className="custom-button-2"
                href="Catalogo/LP_RBS_.pdf"
                target="_blank"
              >
                DESCARGA NUESTRO CATALOGO
              </a>
            </div>
            <div>
              <img src="/proyecto_frontend_react/Logos/rbs.png" alt="" />
            </div>
          </div>
          <div className="project">
            <div>
              <h3>diamond power</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam illo harum magnam id earum vel ex officia tempore
                cumque quos, pariatur nulla sint perferendis libero laboriosam
                inventore omnis, molestiae voluptas dicta. Provident suscipit
                maxime obcaecati, eligendi in minima adipisci magni placeat
                nobis culpa sint a reiciendis modi illo dolores voluptate?
              </p>
              <a
                className="custom-button-3"
                href="Catalogo/LP_DP_.pdf"
                target="_blank"
              >
                DESCARGA NUESTRO CATALOGO
              </a>
            </div>
            <div>
              <img src="/proyecto_frontend_react/Logos/diamond.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
