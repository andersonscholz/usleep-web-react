import { Col, Container, Row } from "react-bootstrap";
import Main from '../../layouts/Main';
import { useEffect, useState } from "react";

const MediaDeHoras = () => {
    const [media, setMedia] = useState(0);
    const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
    const [error, setError] = useState(null); // Estado para gerenciar erros

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
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.data && data.data.length > 0) {
                    const totalHoras = data.data.reduce((acc, item) => acc + item.horas_dormidas, 0);
                    const average = totalHoras / data.data.length;
                    setMedia(average);
                } else {
                    setMedia(0); // Define a média como 0 se não houver dados
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar dados:", err);
                setError('Não foi possível carregar os dados de horas dormidas.');
                setMedia(0); // Define a média como 0 em caso de erro
                setLoading(false);
            });
    }, []);

    return (
        <Main title="Média de horas">
            <Container className="text-center p-0">
                <Row className="text-center" style={{ paddingTop: '0', marginTop: '0' }}>
                    <Col className="text-center p-0" style={{ color: "#fff" }}>
                        <h1>Média de horas dormidas</h1>
                        {loading ? (
                            <h2>Carregando...</h2>
                        ) : error ? (
                            <h2 style={{ color: 'red' }}>{error}</h2>
                        ) : media > 0 ? (
                            <h2>{media.toFixed(2)} horas</h2> // Exibe a média com 2 casas decimais
                        ) : (
                            <h2>Você tem 0 horas dormidas</h2>
                        )}
                    </Col>
                </Row>
            </Container>
        </Main>
    );
}

export default MediaDeHoras;
