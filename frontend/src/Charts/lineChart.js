import React, {
    useEffect,
    useState
} from "react";
import Chart from "react-apexcharts";

function LineGraph() {
    const [list, setList] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:4000/line')   // TO DO: get request for line name, data of selected cities
            .then(response => response.json())
            .then((json) => {
                setList(json);
            });
    }, [])

    const series = [{
            name: "city1", 
            data: [19, 22, 20, 26],
        },
        //additional data in this array..
        {
            name: "city2",
            data: [103, 105, 98, 83],
        },
    ];

    const options = {
        xaxis: {
            categories: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"],
        },
        stroke: { // to indicate possible missing data 
            width: [5, 7, 5],
            curve: "straight",
            dashArray: [0, 8, 0],
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 7,
            },
        },
        tooltip: {
            y: [{
                    title: {
                        formatter: function (val) {
                            return val + " rent: ";
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " rent: ";
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
            ],
        },
        grid: {
            borderColor: "#f1f1f1",
        },
        // dataLabels: {
        //     enabled: false,
        //   },
        title: {
            text: "Compare 2021 Rental Prices by City",
            align: "center",
            style: {
                fontSize: '18px',
                fontWeight: 'thin',
                fontFamily: undefined,
                color: '#696969'
            },
        },
    };


    return <div style={{ display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'}}
     >
        <Chart type = "line" style={{width: '60%', height: '50%'}}
      
    series = {
        series
    }
    options = {
        options
    }
    />
    </div>;
}

export default LineGraph;