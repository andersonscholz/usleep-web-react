import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Register = () => {
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
                marginTop: '10vh',
                color: 'white'
            }}>U SLEEP</h2>
            <div>
                <h2 style={{
                    fontSize: '16pt',
                    border: 'none',
                    marginTop: '10vh',
                    color: 'white'
                }}>Insira os dados abaixo</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirmar Senha</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme sua senha"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            />
                    </Form.Group>
                    <Button type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Register;
