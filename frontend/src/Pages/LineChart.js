import React from 'react';
import LineGraph from '../Charts/lineChart';

function LineChart() {
    return(
        <section>
            <div class="mt-5">
                {<LineGraph/>}
            </div>
        </section>
    );
}

export default LineChart;