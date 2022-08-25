import React from 'react';
import StatesMap from '../Charts/statesChart';

function StatesChart() {
    return(
        <section>
            <div class="container-fluid">
                {/* <p>This is the States Chart page.</p> */}
            </div>
            {<StatesMap/>}
        </section>
    );
}

export default StatesChart;