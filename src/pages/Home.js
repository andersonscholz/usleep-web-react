import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaTools, FaLightbulb, FaChartLine, FaUser, FaBook, FaBullseye } from 'react-icons/fa';
import Main from '../layouts/Main';
import {Link} from 'react-router-dom'
import '../styles/home.css'


const Home = () => {
    const cards = [
        { title: 'Ajustes', icon: <FaTools size={36} />, link: '/pages/menus/ajustes'},
        { title: 'Dicas', icon: <FaLightbulb size={36} />, link: '/pages/menus/dicas' },
        { title: 'Gráfico de Sono', icon: <FaChartLine size={36} />, link: '/pages/menus/grafico-de-sono' },
        { title: 'Meus Dados', icon: <FaUser size={36} />, link: '/pages/menus/meus-dados' },
        { title: 'Diário de Sono', icon: <FaBook size={36} />, link: '/pages/menus/diario-de-sono' },
        { title: 'Minhas Metas', icon: <FaBullseye size={36} />, link: '/pages/menus/minhas-metas' },
    ];

    return (
        <Main title="uSleep">
            <Container className="text-center">
                <Row className='mt-5'>
                    {cards.map((card, index) => (
                        <Col key={index} xs={6} sm={6} md={6} lg={6} className="mb-5">
                        <Link to={card.link} style={{ textDecoration: 'none' }}>
                            <Card
                                className='card-home'
                                style={{
                                    borderRadius: '25px',
                                    textAlign: 'center',
                                    padding: '20px',
                                    width: '150px',
                                    height: '150px',
                                    margin: '0 auto',
                                    boxShadow: '20px 20px 60px black',
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
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Main>
    );
};

export default Home;
