import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarMenu() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  //cores da homme e do galpão
  const navbarBg = !isHomePage ? '#1a1a1a' : (scrolled ? '#1a1a1a' : 'transparent');
  const textColor = !isHomePage ? '#fff' : (scrolled ? '#fff' : '#fff'); // Texto sempre branco

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className="py-3 transition-navbar"
      style={{
        backgroundColor: navbarBg,
        transition: 'all 0.3s ease-in-out',
        boxShadow: (!isHomePage || scrolled) ? '0 4px 20px rgba(0,0,0,0.2)' : 'none'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/iconeSite.png"
            alt="Granja Mais"
            height="40"
            className="d-inline-block align-top me-2 rounded-circle"
          />
          <span className="fw-bold" style={{ color: textColor }}>
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
              className="mx-2 fw-bold"
              style={{ color: textColor }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/galpoes" 
              className="mx-2 fw-bold"
              style={{ color: textColor }}
            >
              Galpões
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}