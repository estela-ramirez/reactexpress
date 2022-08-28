import React from 'react';
import LineGraph from '../Charts/lineChart';
import DropDown from '../components/dropdown';

function LineChart() {
    return(
        <section>
            {<DropDown/>}
            {/* <div class="mt-5">
                {<LineGraph/>}
            </div> */}
        </section>
    );
}

export default LineChart;