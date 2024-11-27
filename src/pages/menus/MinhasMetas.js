// src/pages/menus/MinhasMetas.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Main from '../../layouts/Main';
import axios from 'axios';

const MinhasMetas = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState(''); // 'success' ou 'danger'

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação simples: verifica se todos os campos não estão vazios
        if (titulo.trim() === '' || descricao.trim() === '') {
            setTipoMensagem('danger');
            setMensagem('Todos os campos são obrigatórios.');
            return;
        }

        try {
            const token = localStorage.getItem('access_token'); // Obtenha o token de autenticação

            const response = await axios.post('http://localhost:8000/api/metas', {
                titulo: titulo,
                descricao: descricao,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.status === 201 || response.status === 200) {
                setTipoMensagem('success');
                setMensagem('Meta adicionada com sucesso!');
                setTitulo('');
                setDescricao('');
            } else {
                setTipoMensagem('danger');
                setMensagem('Erro ao adicionar meta. Tente novamente.');
            }
        } catch (error) {
            console.error("Erro ao adicionar meta:", error);

            if (error.response && error.response.data && error.response.data.errors) {
                // Exibir mensagens de erro específicas
                const errors = error.response.data.errors;
                const errorMessages = Object.values(errors).flat().join(' ');
                setTipoMensagem('danger');
                setMensagem(errorMessages);
            } else if (error.response && error.response.data && error.response.data.message) {
                setTipoMensagem('danger');
                setMensagem(error.response.data.message);
            } else {
                setTipoMensagem('danger');
                setMensagem('Erro ao conectar com o servidor. Tente novamente mais tarde.');
            }
        }
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
        backgroundColor: '#28a745', // Verde para indicar ação positiva
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
        <Main title="Minhas Metas">
            <Container className="text-center p-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={formContainerStyle}>
                    <h1 style={titleStyle}>Minhas Metas</h1>
                    
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

                    {/* Formulário para adicionar meta */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="titulo" className="mb-4">
                            <Form.Label style={{ color: '#fff', textAlign: 'left' }}>Título da Meta</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Digite o título da sua meta..."
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                style={formControlStyle}
                            />
                        </Form.Group>

                        <Form.Group controlId="descricao" className="mb-4">
                            <Form.Label style={{ color: '#fff', textAlign: 'left' }}>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Descreva sua meta aqui..."
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                style={formControlStyle}
                            />
                        </Form.Group>

                        <Button type="submit" style={submitButtonStyle}>
                            Adicionar Meta
                        </Button>
                    </Form>
                </div>
            </Container>
        </Main>
    );
};

export default MinhasMetas;
