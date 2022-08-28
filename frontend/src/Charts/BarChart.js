import React from 'react'
import Plot from 'react-plotly.js';

function BarGraph(props) {

    function getCityNames(list){
        return list.map(data=>data[0]);
    }

    function getCityPrices(list){
        return list.map(data=>data[1]);
    }

    return ( 
        <div>
            <
        Plot 
        
        style={{width: '90%', height: '90%'}}
        config={{responsive: true, displayModeBar: false}}

        data = {
            [
                {
                    type: 'bar',
                    x: getCityNames(props.data.data),
                    y: getCityPrices(props.data.data),
                    marker: {
                        color: props.data.color,
                    }
                },
            ]
        }
        layout = {
            {
                autosize: true,
                title: props.data.title,
                responsive: true,
            }
        }
        />
        </div>
        

    );
}

export default BarGraph;