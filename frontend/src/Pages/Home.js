import React from 'react';
import ReadRemoteFile from '../components/CSVReader2';

function Home() {
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">Welcome</h1>
                <p>This is the home page.</p>
                <div>
                    {<ReadRemoteFile/>}
                </div>
            </div>
        </section>
    );
}

export default Home;