import React from 'react';
import CheapBarGraph from '../Charts/cheapBarChart';
import ExpensiveBarGraph from '../Charts/expensiveBarChart';
import './barCharts.css';

function BarCharts() {
    return(
        <section>
            <div className="flex-container">
                <div className="flex-child">{<CheapBarGraph/>}</div>
                <div className="flex-child">{<ExpensiveBarGraph/>}</div>
            </div>
        </section>
    );
}

export default BarCharts;