import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`py-3 transition-navbar ${scrolled ? 'bg-dark' : 'bg-transparent'}`}
      style={{
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
          <img
            src="/iconeSite.png"
            alt="Granja Mais"
            height="40"
            className="d-inline-block align-top me-2"
            style={{ 
              borderRadius: '50%',
              objectFit: 'cover',
              transition: 'all 0.3s ease',
              filter: 'brightness(1.1)' 
            }}
          />
          <span className="fw-bold text-white">
            Granja⁺
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="bg-white bg-opacity-25 border-0" 
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="mx-2 text-white fw-bold"
              style={{ 
                transition: 'all 0.3s ease',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)' 
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/galpoes" 
              className="mx-2 text-white fw-bold"
              style={{ 
                transition: 'all 0.3s ease',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Galpões
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}