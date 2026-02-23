import React from 'react';
import CarouselHome from '../components/Home/CarouselHome';
import CardsHome from '../components/Home/CardsHome';
import ImageTextSection from '../components/Home/ImageTextSection';
import TrabalheConosco from '../components/Home/TrabalheConosco';


export default function Home() {
  return (
    <>
      <CarouselHome />
      
      {}
      <div className="text-center my-5">
        <h1>Bem-vindo à Granja⁺</h1>
        <p className="lead">Referência em qualidade e inovação na criação de frangos</p>
      </div>

      <ImageTextSection />

      <CardsHome />

      <TrabalheConosco />



    </>
  );
}