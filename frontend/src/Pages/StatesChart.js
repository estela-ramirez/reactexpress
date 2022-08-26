import React from 'react';
import StatesMap from '../Charts/statesChart';

function StatesChart() {
    return(
        <section>
            <div class="container-fluid">
            {<StatesMap/>}
            </div>
            
        </section>
    );
}

export default StatesChart;