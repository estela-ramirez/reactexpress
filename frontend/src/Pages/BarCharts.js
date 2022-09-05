import React, {
    useEffect,
    useState
} from 'react'
import BarGraph from '../Charts/BarChart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './barCharts.css';

function BarCharts() {
    const [cheapData, setCheapData] = useState({ title: 'Top 10 Cheapet cities in 2021', color: 'rgb(135,206,235)', data: [] });
    const [expensiveData, setExpensiveData] = useState({ title: 'Top 10 Expensive cities in 2021', color: 'rgb(250,128,114)', data: [] });

    useEffect(() => {
        fetch('/cheap-cities')
            .then(response => response.json())
            .then((json) => {
                setCheapData({ title: 'Top 10 Cheapet cities in 2021', color: 'rgb(135,206,235)', data: json });
            });
        fetch('/expensive-cities')
        .then(response => response.json())
            .then((json) => {
                setExpensiveData({ title: 'Top 10 Expensive cities in 2021', color: 'rgb(250,128,114)', data: json });
            });
    }, [])


    return(
        <Container fluid>
            <Row className="align-items-center">
                <Col xs={12} md={6}>{<BarGraph data={cheapData} />}</Col>
                <Col xs={12} md={6}>{<BarGraph data={expensiveData} />}</Col>
            </Row>
        </Container>
    );
}

export default BarCharts;