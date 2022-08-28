import React, {
    useEffect,
    useState
} from 'react'
import BarGraph from '../Charts/BarChart';
import './barCharts.css';

function BarCharts() {
    const [cheapData, setCheapData] = useState({ title: 'Top 10 Cheapet cities in 2021', color: 'rgb(135,206,235)', data: [] });
    const [expensiveData, setExpensiveData] = useState({ title: 'Top 10 Expensive cities in 2021', color: 'rgb(250,128,114)', data: [] });

    useEffect(() => {
        fetch('http://localhost:4000/cheap-cities')
            .then(response => response.json())
            .then((json) => {
                setCheapData({ title: 'Top 10 Cheapet cities in 2021', color: 'rgb(135,206,235)', data: json });
            });
        fetch('http://localhost:4000/expensive-cities')
        .then(response => response.json())
            .then((json) => {
                setExpensiveData({ title: 'Top 10 Expensive cities in 2021', color: 'rgb(250,128,114)', data: json });
            });
    }, [])


    return(
        <section>
            <div className="flex-container">
                <div className="flex-child">{<BarGraph data={cheapData} />}</div>
                <div className="flex-child">{<BarGraph data={expensiveData} />}</div>
            </div>
        </section>
    );
}

export default BarCharts;