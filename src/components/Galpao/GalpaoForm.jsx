import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import galpaoService from '../../services/galpaoService';

function GalpaoForm({ show, handleClose, recarregarDados }) {

  const estadoInicial = {
    nome: '',
    qtdFrangos: '',
    qtdComedouros: '',
    qtdBebedouros: '',
    qtdVentiladores: '',
    qtdExaustores: '',
    qtdResponsaveis: '',
    temTermometro: false
  };

  const [formData, setFormData] = useState(estadoInicial);

  const handleChange = (evento) => {
    const { name, value, type, checked } = evento.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox'
        ? checked
        : (type === 'number' && value !== "")
          ? Number(value)
          : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await galpaoService.cadastrar(formData);
      recarregarDados();
      handleClose();
      setFormData(estadoInicial);
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar o galpão. Verifique se a API está rodando.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Novo Galpão</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nome do Galpão</Form.Label>
            <Form.Control
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: Galpão Norte 01"
              required
            />
          </Form.Group>

          <div className="row">
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Qtd. Frangos</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                name="qtdFrangos"
                value={formData.qtdFrangos}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3">
              <Form.Label>Qtd. Responsáveis</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                name="qtdResponsaveis"
                value={formData.qtdResponsaveis}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <div className="row">
            <Form.Group className="col-md-4 mb-3">
              <Form.Label>Comedouros</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                name="qtdComedouros"
                value={formData.qtdComedouros}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="col-md-4 mb-3">
              <Form.Label>Bebedouros</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                name="qtdBebedouros"
                value={formData.qtdBebedouros}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="col-md-4 mb-3">
              <Form.Label>Ventiladores</Form.Label>
              <Form.Control
                type="number"
                inputMode="numeric"
                name="qtdVentiladores"
                value={formData.qtdVentiladores}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Exaustores</Form.Label>
            <Form.Control
              type="number"
              inputMode="numeric"
              name="qtdExaustores"
              value={formData.qtdExaustores}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              name="temTermometro"
              label="Possui Termômetro de Ambiente?"
              checked={formData.temTermometro}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Salvar Galpão
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default GalpaoForm;
