import React from 'react';
import StatesMap from '../Charts/statesChart';

function StatesChart() {
    return(
        <section>
            <div className="mt-5">
            {<StatesMap/>}
            </div>
            
        </section>
    );
}

export default StatesChart;