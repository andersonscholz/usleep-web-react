// src/pages/Register.js
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api'; // Importa a instância do Axios
import '../styles/register.css';

const Register = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirmPassword) {
            setError('As senhas não coincidem!');
            return;
        }

        try {
            const response = await api.post('/cadastro', {
                nome: user, // Certifique-se de que o backend espera 'nome' em vez de 'user'
                email: email,
                senha: password
            });

            if (response.status === 201 || response.status === 200) {
                setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
                // Redirecionar após um breve atraso para que o usuário veja a mensagem de sucesso
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                setError('Erro ao realizar o cadastro. Tente novamente.');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message || 'Erro ao realizar o cadastro.');
            } else {
                setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
            }
        }
    };

    return (
        <Container className="text-center">
            <h2 style={{
                fontSize: '54pt',
                border: 'none',
                marginTop: '7vh',
                color: 'white'
            }}>U SLEEP</h2>
            <div style={{
                background: 'rgba(1, 1, 1, 0.5)',
                padding: '2vh',
                borderRadius: '3vh',
                minHeight: '49vh',
                marginTop: '6vh'
            }}>
                <h2 style={{
                    fontSize: '16pt',
                    border: 'none',
                    marginTop: '5vh',
                    marginBottom: '5vh',
                    color: 'white'
                }}>Insira os dados abaixo</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="login">
                        <Form.Control
                            className="input-form"
                            type="text"
                            placeholder="USUÁRIO"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="email" className="mt-3">
                        <Form.Control
                            className="input-form"
                            type="email"
                            placeholder="E-MAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mt-3">
                        <Form.Control
                            className="input-form"
                            type="password"
                            placeholder="SENHA"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword" className="mt-3">
                        <Form.Control
                            className="input-form"
                            type="password"
                            placeholder="CONFIRMA SENHA"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button type="submit" className='cadastrar mt-4'>
                        Cadastrar
                    </Button>
                </Form>
            </div>
            <p style={{
                marginTop: '2vh',
                color: 'white',
            }}>Já possui uma conta?</p>
            <Link to="/login">
                <p style={{
                    marginTop: '-2vh',
                    color: 'white',
                    textDecoration: 'underline'
                }}>entrar</p>
            </Link>
        </Container>
    );
};

export default Register;
