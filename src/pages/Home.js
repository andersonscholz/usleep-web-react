import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaTools, FaLightbulb, FaChartLine, FaUser, FaBook, FaBullseye } from 'react-icons/fa';
import Main from '../layouts/Main';


const Home = () => {
    const cards = [
        { title: 'Ajustes', icon: <FaTools size={36} /> },
        { title: 'Dicas', icon: <FaLightbulb size={36} /> },
        { title: 'Gráfico de Sono', icon: <FaChartLine size={36} /> },
        { title: 'Meus Dados', icon: <FaUser size={36} /> },
        { title: 'Diário de Sono', icon: <FaBook size={36} /> },
        { title: 'Minhas Metas', icon: <FaBullseye size={36} /> },
    ];

    return (
        <Main>
            <Container className="text-center">
                <Row>
                    {cards.map((card, index) => (
                        <Col key={index} xs={6} sm={6} md={6} lg={6} className="mb-5">
                            <Card
                                style={{
                                    borderRadius: '25px',
                                    textAlign: 'center',
                                    padding: '20px',
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto',
                                    boxShadow: '20px 20px 60px #bebebe',
                                    background: 'linear-gradient(145deg, #43CBFF, #9708CC)',
                                    border: 'none',
                                    color: 'white',
                                }}
                            >
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>{card.icon}</div>
                                    <Card.Title className="mt-3">{card.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Main>
    );
};

export default Home;
