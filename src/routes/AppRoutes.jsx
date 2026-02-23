import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Galpoes from '../pages/Galpoes';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galpoes" element={<Galpoes />} />
    </Routes>
  );
}