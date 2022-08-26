import React from 'react';
import StatesMap from '../Charts/statesChart';

function StatesChart() {
    return(
        <section>
            <div class="mt-5">
            {<StatesMap/>}
            </div>
            
        </section>
    );
}

export default StatesChart;