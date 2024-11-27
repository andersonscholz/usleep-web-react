import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Main from '../../layouts/Main';
import '../../styles/graficodesono.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';

const GráficoDeSono = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const openModal = () => {
        setIsOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsOpen(false);
    };

    // Função para submeter o formulário
    const onSubmit = (data) => {
        console.log(data);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access_token"));

        fetch('http://127.0.0.1:8000/api/noites-de-sono', {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => { })
            .catch(error => console.error(error));

        closeModal(); // Fechar modal após submissão
    };

    return (
        <Main title="Gráfico de adsadasdSono">
            <Container className="text-center">
                <Row xs={1} sm={2} md={3} className="mt-0 p-0 row-grafico-sono">
                    <Col className="mb-0">
                        <Link to="/pages/menus/historico-sono" style={{ textDecoration: 'none' }}>
                            <Card className='card-grafico-sono'>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>Histórico de sono</div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="mb-0">
                        <Link to="/pages/menus/media-de-horas" style={{ textDecoration: 'none' }}>
                            <Card className='card-grafico-sono'>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>Média de horas</div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col className="mb-0">
                        {/* Envolver o cartão "Adicionar horas" em um Link vazio para consistência */}
                        <Link to="#" style={{ textDecoration: 'none' }}>
                            <Card className='card-grafico-sono' onClick={openModal}>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>Adicionar horas</div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Formulário de Horas"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        padding: '20px',
                        width: '400px',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    },
                }}
            >
                <h2>Formulário de Horas</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="date">Data:</label>
                        <input
                            id="date"
                            type="date"
                            {...register('data', { required: 'A data é obrigatória' })}
                        />
                        {errors.data && <span style={{ color: 'red' }}>{errors.data.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="hours">Horas:</label>
                        <input
                            id="hours"
                            type="number"
                            step="0.1"
                            {...register('horas_dormidas', { required: 'O número de horas é obrigatório', min: 0.1 })}
                        />
                        {errors.horas_dormidas && <span style={{ color: 'red' }}>{errors.horas_dormidas.message}</span>}
                    </div>

                    <button type="submit">Enviar</button>
                </form>
                <button onClick={closeModal}>Fechar</button>
            </Modal>
        </Main>
    )
}

export default GráficoDeSono;
