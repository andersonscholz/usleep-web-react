import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de cadastro (validações de senha e email)
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }
        console.log('Cadastro', { email, password });
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
                borderRadius: '3vh'
            }}>
                <h2 style={{
                    fontSize: '16pt',
                    border: 'none',
                    marginTop: '5vh',
                    marginBottom: '5vh',
                    color: 'white'
                }}>Insira os dados abaixo</h2>
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
                    <Form.Group controlId="email">
                        <Form.Control
                            className="input-form"
                            type="email"
                            placeholder="E-MAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            className="input-form"
                            type="password"
                            placeholder="SENHA"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Control
                            className="input-form"
                            type="password"
                            placeholder="CONFIRMA"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Button type="submit" className='cadastrar'>
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
