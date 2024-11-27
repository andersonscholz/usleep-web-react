import React from 'react';
import { Container } from 'react-bootstrap';
import Main from '../../layouts/Main';


const MeusDados = () => {
    const email = localStorage.getItem('email');
    const nome = localStorage.getItem('nome');
    return (
        <Main title="Meus Dados">
            <Container className="text-center p-0" style={{ color: "#fff" }}>
                <h1>Meus Dados</h1>

                <h2>Nome: {nome}</h2>
                <h2>Email: {email}</h2>

            </Container>
        </Main>
    );
};

export default MeusDados;