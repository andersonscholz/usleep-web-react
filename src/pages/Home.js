import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <h1>Bem-vindo à Home Page!</h1>
            <p>Essa é a página inicial do nosso site.</p>
            <Button variant="primary" href="/login">Entrar</Button>
            <Button variant="secondary" href="/register" className="ml-2">Cadastrar-se</Button>
        </Container>
    );
};

export default Home;
