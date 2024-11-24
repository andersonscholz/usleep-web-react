import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Main from '../../layouts/Main';
import '../../styles/graficodesono.css';

const GráficoDeSono = () => {

    return (
        <Main title="Gráfico de Sono">
            <Container className="text-center">          
            <Row xs={8} className="mt-5 p-0 row-grafico-sono">
                <Col className="mb-5">
                    <Card className='card-grafico-sono'>
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <div>circle progress bar</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-5">
                    <Card className='card-grafico-sono'>
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                            <div>media d horas</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
        </Main>
    );
};

export default GráficoDeSono;
