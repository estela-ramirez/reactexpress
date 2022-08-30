import React from 'react';
import BootTable from '../components/BootTable'

function TablePage() {
    return(
        <section>
            <div className="container-fluid">
                <h4 className="mt-4">Average Rental Prices across the U.S. (2014-2021)</h4>
                <div className="mt-4">
                    {<BootTable/>} 
                </div>
            </div>
        </section>
    );
}

export default TablePage;