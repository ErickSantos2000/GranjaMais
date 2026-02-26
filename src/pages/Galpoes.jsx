import React, { useState, useEffect } from 'react'; // importa os hoocks
import galpaoService from '../services/galpaoService'; // importa o serviço
import { Container } from 'react-bootstrap';
import GalpaoTable from '../components/Galpao/GalpaoTable';

export default function Galpoes() {
    // criando estado para guardar listas de galpoes
    const[galpoes, setGalpoes] = useState([]);

    // executa assim que uma função a pagina é montada na tela
    useEffect(() => {
      const buscarDados = async () => {
        try {
          const dados = await galpaoService.listar(); // chama o get do serviço
          setGalpoes(dados); // salva os dados recebidos no estado
        } catch (error) {
          console.error("Erro ao buscar galpões:", error);
        }
      }
      buscarDados();

    }, []);
  return (

    <Container className="mt-5 pt-5"> {/* Adicionado mt-5 pt-5 */}
      
      <GalpaoTable galpoes={galpoes} />

    </Container>
  );
}