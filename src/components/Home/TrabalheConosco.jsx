import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import trabalheImagem from '../../assets/images/mascote.png';

export default function TrabalheConosco() {
  return (
    <Container className="my-5 py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card 
              className="shadow-lg border-0 overflow-hidden"
              style={{
                transition: 'all 0.3s ease',
                border: '3px solid transparent',
                cursor: 'pointer',
                borderRadius: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '3px solid #28a745';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(40, 167, 69, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '3px solid transparent';
                e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.15)';
              }}
            >
              <Row className="g-0">
                {}
                <Col md={5}>
                  <div 
                    style={{
                      height: '100%',
                      minHeight: '350px',
                      backgroundImage: `url(${trabalheImagem})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </Col>

                {}
                <Col md={7}>
                  <Card.Body className="p-5 d-flex flex-column justify-content-center h-100">
                    <div className="text-center text-md-start">
                      <h2 className="display-5 mb-3" style={{ color: '#28a745' }}>
                        🐔 Trabalhe Conosco
                      </h2>
                      
                      <p className="lead mb-4">
                        Faça parte da nossa equipe e cresça com a gente!
                      </p>
                      
                      <p className="mb-4">
                        Estamos sempre em busca de talentos que compartilhem da nossa paixão 
                        pela qualidade e inovação na criação de frangos.
                      </p>
                      
                      <div className="d-grid gap-2 d-md-block">
                        <Button 
                          href="http://localhost:5173/galpoes"
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="success"
                          size="lg"
                          className="px-5 py-3"
                        >
                          Cadastre-se →
                        </Button>
                      </div>
                      
                      <p className="text-muted small mt-3 mb-0">
                        Ao clicar, você será redirecionado para nossa página de galpões
                      </p>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}