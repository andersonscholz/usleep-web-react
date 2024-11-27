// src/components/TestCORS.js
import React, { useEffect, useState } from 'react';
import api from '../services/api'; // Importação correta
import { Alert, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TestCORS = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const fetchUserData = async () => {
        setError('');
        try {
            const response = await api.get('/usuario');
            setUserData(response.data.data);
        } catch (err) {
            if (err.response) {
                // Erros retornados pelo backend
                setError(err.response.data.message || 'Erro ao recuperar dados do usuário.');
            } else {
                // Outros erros (ex.: problemas de rede)
                setError('Erro ao conectar ao servidor.');
            }
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        navigate('/login');
    };

    return (
        <Container className="mt-5">
            <h2>Teste de CORS</h2>
            <Button variant="primary" onClick={fetchUserData} className="mb-3">
                Recarregar Dados do Usuário
            </Button>
            <Button variant="secondary" onClick={handleLogout} className="mb-3 ms-3">
                Logout
            </Button>
            {error && <Alert variant="danger">{error}</Alert>}
            {userData ? (
                <div>
                    <h4>Dados do Usuário:</h4>
                    <p><strong>ID:</strong> {userData.id}</p>
                    <p><strong>Nome:</strong> {userData.nome}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    {/* Adicione outros campos conforme necessário */}
                </div>
            ) : (
                <p>Carregando dados do usuário...</p>
            )}
        </Container>
    );
};

export default TestCORS;
