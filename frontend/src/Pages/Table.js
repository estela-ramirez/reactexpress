import React from 'react';
import BootTable from './components/BootTable'

function TablePage() {
    return(
        <section>
            <div class="container-fluid">
                <p>This is the table page.</p>
                <div>
                    {<BootTable/>} 
                </div>
            </div>
        </section>
    );
}

export default TablePage;