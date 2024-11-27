import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login
                    const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            const raw = JSON.stringify({
            "email": user,
            "senha": password
            });

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch("http://127.0.0.1:8000/api/login", requestOptions)
            .then((response) => response.json())
                .then((result) => {
                    const {access_token, data} = result;

                    localStorage.setItem("access_token", access_token);
                    localStorage.setItem("userId", data.id);
                    localStorage.setItem("email", data.email);
                    localStorage.setItem("nome", data.nome);
                    
                    window.location.href = "/Home";
                })
                .catch((error) => console.error(error));
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
                }}>Login</h2>
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
                    <div style={{minHeight: '3vh'}}></div>
                    <Button type="submit" className='cadastrar'>
                        Entrar
                    </Button>
                </Form>
            </div>
                <p style={{
                    marginTop: '10vh',
                    color: 'white',
                }}>Não possui conta?</p>
            <Link to="/register">
                <p style={{
                    marginTop: '-2vh',
                    color: 'white',
                    textDecoration: 'underline'
                }}>cadastre-se</p>
            </Link>
        </Container>
    );
};

export default Login;
