import { Card, Col, Container, Row } from "react-bootstrap";
import Main from '../../layouts/Main';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController } from 'chart.js';
import { useEffect, useRef } from "react";

// Registrar as escalas e outros componentes necessários
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement, LineController,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const HistoricoSono = () => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access_token"));

        fetch('http://127.0.0.1:8000/api/noites-de-sono', {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(data => {

                const dataEHora = data.data.map((item) =>
                ({
                    data: item.data,
                    horas_dormidas: item.horas_dormidas
                })
                );

                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                if (canvasRef.current) {
                    chartRef.current = new ChartJS(canvasRef.current, {
                        type: 'line',
                        data: {
                            labels: dataEHora.map(item => item.data),
                            datasets: [{
                                label: 'Horas dormidas',
                                data: dataEHora.map(item => item.horas_dormidas),
                                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                                borderColor: 'rgba(255, 99, 132, 1)',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            }
                        }
                    });
                }
            });



    }, []);

    return (
        <Main title="Histórico de sono">
            <Container className="text-center p-0">
                <Row className="text-center" style={{ paddingTop: '0', marginTop: '0' }}>
                    <Col className="text-center bg-light">
                        <canvas ref={canvasRef} id="myChart"></canvas>
                    </Col>
                </Row>
            </Container>
        </Main>
    );
}

export default HistoricoSono;