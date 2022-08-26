import React, {
    useEffect,
    useState
} from 'react'
import Plot from 'react-plotly.js';

function ExpensiveBarGraph() {
    const [list, setList] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:4000/expensive-cities')
            .then(response => response.json())
            .then((json) => {
                setList(json);
            });
    }, [])

    function getCityNames(){
        return list.map(data=>data[0]);
    }

    function getCityPrices(){
        return list.map(data=>data[1]);
    }

    return ( 
        <div>
            <
        Plot 
        
        style={{width: '90%', height: '90%'}}
        config={{responsive: true}}

        data = {
            [
                {
                    type: 'bar',
                    x: getCityNames(),
                    y: getCityPrices(),
                    marker: {
                        color: 'rgb(250,128,114)',
                    }
                },
            ]
        }
        layout = {
            {
                autosize: true,
                title: 'Top 10 Expensive cities in 2021 ',
                responsive: true,
            }
        }
        />
        </div>
        

    );
}

export default ExpensiveBarGraph;