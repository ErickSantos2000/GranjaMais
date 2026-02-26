import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import galpaoService from '../services/galpaoService';
import GalpaoTable from '../components/Galpao/GalpaoTable';
import GalpaoForm from '../components/Galpao/GalpaoForm';

export default function Galpoes() {
    const [galpoes, setGalpoes] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Função para buscar dados da API
    const buscarDados = async () => {
        try {
            const dados = await galpaoService.listar();
            setGalpoes(dados);
        } catch (error) {
            console.error("Erro ao buscar galpões:", error);
        }
    };

    // Carrega os dados na primeira vez que a página monta
    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <Container className="mt-5 pt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">Gestão de Galpões</h2>
                <Button variant="success" onClick={() => setShowModal(true)}>
                    + Novo Galpão
                </Button>
            </div>
            
            <GalpaoTable galpoes={galpoes} />

            <GalpaoForm 
                show={showModal} 
                handleClose={() => setShowModal(false)} 
                recarregarDados={buscarDados} 
            />
        </Container>
    );
}
