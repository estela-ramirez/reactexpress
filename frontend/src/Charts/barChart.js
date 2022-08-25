import React, {
    useEffect,
    useState
} from 'react'
import Plot from 'react-plotly.js';

function BarGraph() {
    const [list, setList] = useState([]);
  
    
    useEffect(() => {
        fetch('http://localhost:4000/cheap-cities')
            .then(response => response.json())
            .then((json) => {
                console.log(json); //
                console.log("---json");
                setList(json);
            });
    }, [])

    return ( <
        Plot data = {
            [
                {
                    type: 'bar',
                    x: ['Los Angeles', 'San Atonio', 'Pheonix'],
                    y: [2, 5, 3],
                    marker: {
                        color: 'rgb(158,202,225)',
                    }
                },
            ]
        }
        layout = {
            {
                autosize: true,
                title: 'Top 10 cheapet cities in 2021 ',
                responsive: true,
            }
        }
        />

    );
}

export default BarGraph;