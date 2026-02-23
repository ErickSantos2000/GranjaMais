import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import granja1 from '../../assets/images/granja1.jpg';
import granja2 from '../../assets/images/granja2.jpg';
import granja3 from '../../assets/images/granja3.jpg';

export default function CarouselHome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/galpoes');
  };

  return (
    <Carousel 
      fade 
      className="mb-4 carousel-premium"
      indicators={true}
      interval={5000}
      controls={true}
      pause="hover"
    >
      {}
      <Carousel.Item>
        <div onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
          <img
            className="d-block w-100"
            src={granja1}
            alt="Granja de Frangos"
            style={{ height: '600px', objectFit: 'cover' }}
          />
          {}
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2, bottom: '20%' }}>
            <h3 className="display-4 fw-bold text-white mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Granja Moderna
            </h3>
            <p className="lead text-white text-center px-5" style={{ 
              fontSize: '1.5rem', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Instalações de última geração para criação de frangos
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {}
      <Carousel.Item>
        <div onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
          <img
            className="d-block w-100"
            src={granja2}
            alt="Galpões Automatizados"
            style={{ height: '600px', objectFit: 'cover' }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2, bottom: '20%' }}>
            <h3 className="display-4 fw-bold text-white mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Automação Total
            </h3>
            <p className="lead text-white text-center px-5" style={{ 
              fontSize: '1.5rem', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Sistemas automatizados para alimentação e climatização
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      {}
      <Carousel.Item>
        <div onClick={handleClick} style={{ cursor: 'pointer', position: 'relative' }}>
          <img
            className="d-block w-100"
            src={granja3}
            alt="Bem-estar Animal"
            style={{ height: '600px', objectFit: 'cover' }}
          />
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.15) 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />
          <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 2, bottom: '20%' }}>
            <h3 className="display-4 fw-bold text-white mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Bem-estar Animal
            </h3>
            <p className="lead text-white text-center px-5" style={{ 
              fontSize: '1.5rem', 
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Compromisso com o bem-estar e saúde das aves
            </p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}