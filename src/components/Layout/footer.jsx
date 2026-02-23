import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">© 2024 Granja Mais - Todos os direitos reservados</p>
      </Container>
    </footer>
  );
}