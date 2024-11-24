import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Main from '../../layouts/Main';


const Dicas = () => {
    const cards = [
        {content: 'Evite o uso de celular andes de dormir.'},
        {content: 'Evite ingerir muito líquido a partir das 21h.'},
        {content: 'Sons de natureza ajudam a relaxar o cérebro e reduzir os níveis de adrenalina, ansiedade e estresse.'},
        {content: 'Estudos comprovam que travesseiros feitos de pena ajudam a relaxar a tensão do tronco e facial.'},
        {content: 'Luminárias com led amarela ajudam no relaxamento muscular e cerebral.'},
    ];

    return (
        <Main title="Dicas">
            <Container className="text-center p-0">          
                <Row className="text-center" style={{paddingTop: '0', marginTop: '0'}}>
                    {cards.map((card, index) => (
                        <Col key={index} className="text-center">
                            <Card
                                style={{
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                    verticalAlign: 'middle',
                                    width: '38vh',
                                    margin: '0 auto',
                                    marginBottom: '2vh',
                                    border: '2px solid white',
                                    boxShadow: '20px 20px 60px black',
                                    background: 'rgba(255,255,255,0.4)',
                                    color: 'white',
                                }}
                            >
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>{card.icon}</div>
                                    <Card.Title className="mt-3">{card.content}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Main>
    );
};

export default Dicas;
