import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

// Importe as imagens (ajuste os caminhos conforme suas imagens)
import imagem1 from '../../assets/images/card1.jpg';
import imagem2 from '../../assets/images/card2.jpg';
import imagem3 from '../../assets/images/card3.jpg';

export default function ImageTextSection() {
  const sections = [
    {
      id: 1,
      title: "Tecnologia Avançada",
      text: "Nossa granja utiliza os mais modernos sistemas de automação para garantir o bem-estar das aves e a eficiência da produção. Sensores de temperatura, alimentação automatizada e monitoramento 24/7.",
      image: imagem1,
      imageLeft: true 
    },
    {
      id: 2,
      title: "Bem-estar Animal",
      text: "Priorizamos o conforto e a saúde dos frangos com ambientes climatizados, espaço adequado e nutrição balanceada. Tudo para garantir aves mais saudáveis e de maior qualidade.",
      image: imagem2,
      imageLeft: false 
    },
    {
      id: 3,
      title: "Sustentabilidade",
      text: "Compromisso com o meio ambiente através de práticas sustentáveis: reuso de água, energia solar e gestão responsável de resíduos. Uma granja que pensa no futuro.",
      image: imagem3,
      imageLeft: true
    }
  ];

  return (
    <Container className="my-5">
      {sections.map((section) => (
        <Row key={section.id} className="mb-5 py-4 align-items-center">
          
          {/* Se a imagem for à esquerda, mostra primeiro */}
          {section.imageLeft && (
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </Col>
          )}

          {}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: section.imageLeft ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="mb-3" style={{ color: '#2c5e2e' }}>{section.title}</h2>
              <p className="lead" style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
                {section.text}
              </p>
            </motion.div>
          </Col>

          {/* Se a imagem for à direita, mostra depois do texto */}
          {!section.imageLeft && (
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                />
              </motion.div>
            </Col>
          )}
        </Row>
      ))}
    </Container>
  );
}