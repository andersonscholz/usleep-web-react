// src/pages/menus/DiarioDeSono.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Main from '../../layouts/Main';

const DiarioDeSono = () => {
    const [anotacao, setAnotacao] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState(''); // 'success' ou 'danger'

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação simples: verifica se a anotação não está vazia
        if (anotacao.trim() === '') {
            setTipoMensagem('danger');
            setMensagem('A anotação não pode estar vazia.');
            return;
        }

        // Aqui você pode adicionar a lógica para enviar a anotação para o backend
        // Por exemplo, uma requisição POST usando fetch ou axios

        // Para este exemplo, vamos apenas exibir uma mensagem de sucesso
        setTipoMensagem('success');
        setMensagem('Anotação adicionada com sucesso!');
        setAnotacao(''); // Limpa a área de texto após a submissão
    };

    // Estilos inline para o contêiner do formulário
    const formContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
    };

    // Estilos inline para os campos de texto
    const formControlStyle = {
        backgroundColor: '#f8f9fa',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '1rem',
    };

    // Estilos inline para o botão de submissão
    const submitButtonStyle = {
        backgroundColor: '#007bff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    // Estilos inline para o título
    const titleStyle = {
        color: '#fff',
        marginBottom: '20px',
    };

    return (
        <Main title="Diário De Sono">
            <Container className="text-center p-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={formContainerStyle}>
                    <h1 style={titleStyle}>Diário de Sono</h1>
                    
                    {/* Exibição de mensagens de feedback */}
                    {mensagem && (
                        <Alert 
                            variant={tipoMensagem} 
                            onClose={() => setMensagem('')} 
                            dismissible
                            style={{ marginBottom: '20px' }}
                        >
                            {mensagem}
                        </Alert>
                    )}

                    {/* Formulário para adicionar anotação */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="anotacao" className="mb-4">
                            <Form.Label style={{ color: '#fff', textAlign: 'left' }}>Minha Anotação</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Digite suas observações sobre o sono aqui..."
                                value={anotacao}
                                onChange={(e) => setAnotacao(e.target.value)}
                                style={formControlStyle}
                            />
                        </Form.Group>
                        <Button type="submit" style={submitButtonStyle}>
                            Adicionar Anotação
                        </Button>
                    </Form>
                </div>
            </Container>
        </Main>
    );
};

export default DiarioDeSono;
