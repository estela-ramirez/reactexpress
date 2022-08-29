import React from "react";

function Home() {
  return (
    <section>
      <div  className="container-fluid" style={{width: "80%", padding: '50px'}}>
        <h3 className="mt-5" >Rental Prices across the U.S.</h3>
        <div style={{  display: 'flex', alignItems: 'center',
        justifyContent: 'center', }}>
            <p className="mt-2" style={{width: "80%"}}>
            Vizualize average rental prices across the U.S. from 2014-2021. The
            rental prices are the average for various sized homes (1 bed, 2 bed,
            etc). The dataset used does not include data for all states and all cities/regions.
            </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
