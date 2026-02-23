import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import granja1 from '../../assets/images/granja1.jpg';
import granja2 from '../../assets/images/granja2.jpg';
import granja3 from '../../assets/images/granja3.jpg';

export default function CarouselHome() {
  return (
    <Carousel fade className="mb-4">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={granja1}
          alt="Granja de Frangos"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 p-2 rounded">Granja Moderna</h3>
          <p className="bg-dark bg-opacity-50 p-2 rounded">
            Instalações de última geração para criação de frangos
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={granja2}
          alt="Galpões Automatizados"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 p-2 rounded">Automação Total</h3>
          <p className="bg-dark bg-opacity-50 p-2 rounded">
            Sistemas automatizados para alimentação e climatização
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={granja3}
          alt="Bem-estar Animal"
          style={{ height: '400px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="bg-dark bg-opacity-50 p-2 rounded">Bem-estar Animal</h3>
          <p className="bg-dark bg-opacity-50 p-2 rounded">
            Compromisso com o bem-estar e saúde das aves
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}