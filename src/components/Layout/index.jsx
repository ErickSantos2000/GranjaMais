import React from 'react';
import NavbarMenu from './NavbarMenu';
import Footer from './footer';
import AppRoutes from '../../routes/AppRoutes';  // CORRIGIDO: dois pontos (..) para subir dois níveis

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavbarMenu />
      <main style={{ flex: 1 }}>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}