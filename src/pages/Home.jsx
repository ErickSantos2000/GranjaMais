import React from 'react';
import CarouselHome from '../components/Home/CarouselHome';
import CardsHome from '../components/Home/CardsHome';
import ImageTextSection from '../components/Home/ImageTextSection';

export default function Home() {
  return (
    <>
      <CarouselHome />
      
      {/* Apresentação inicial */}
      <div className="text-center my-5">
        <h1>Bem-vindo à Granja Mais</h1>
        <p className="lead">Referência em qualidade e inovação na criação de frangos</p>
      </div>

      {/* Seções com imagem e texto animados */}
      <ImageTextSection />

      {/* Cards de diferenciais */}
      <CardsHome />
    </>
  );
}