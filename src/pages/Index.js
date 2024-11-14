import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Index = () => {

    return (
        <Container className="text-center">
            <h2 style={{
                fontSize: '54pt',
                border: 'none',
                marginTop: '10vh',
                color: 'white'
            }}>U SLEEP</h2>
            <h2 style={{
                color: 'white',
                fontWeight: '400',
                marginTop: '47vh',
                marginBottom: '2vh',
            }}>TENHA O DESCANSO QUE VOCÊ MERECE!</h2>
            
            <Link to="/login">
                <Button style={{
                    minWidth: '37vh',
                    minHeight: '10vh',
                    borderRadius: '30px',
                    verticalAlign: 'text-top',
                    fontSize: '34pt',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    border: 'none'
                }}>
                    ENTRAR
                </Button>
            </Link>
            
            <Link to="/register">
                <p style={{
                    marginTop: '5vh',
                    color: 'white',
                    textDecoration: 'underline'
                }}>criar conta</p>
            </Link>
        </Container>
    );
};

export default Index;
