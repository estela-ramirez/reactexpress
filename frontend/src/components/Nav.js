import React from 'react';  //ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/table' className="nav-item nav-link">Table</Link>
                    <Link to='/states' className="nav-item nav-link">States Map</Link>
                    <Link to='/bars' className="nav-item nav-link">Bar Graph</Link>
                    <Link to='/line' className="nav-item nav-link">Line Graph</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
