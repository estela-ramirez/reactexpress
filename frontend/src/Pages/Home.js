import React from "react";

function Home() {
  return (
    <section>
      <div
        className="container-fluid"
        style={{ width: "80%", padding: "50px" }}
      >
        <h3 className="mt-5">Rental Prices across the U.S.</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="mt-2" style={{ width: "75%" }}>
            Vizualize median rental prices across the 100 most populated cities
            + 5 smaller cities in the U.S. The rental price is called (ZORI): A
            smoothed measure of the typical observed market rate rent across a
            given region. The ZORI index is calculated using all listed homes
            and apartments in a given region. The data spans from January 2014 -
            June 2021.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
