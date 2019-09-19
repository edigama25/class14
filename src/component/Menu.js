import React from 'react';
import {Link} from 'react-router-dom'
const Menu = () => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-6">
                <Link to="/"><h4>Home</h4></Link> 
                </div>

                <div className="col-6">
                <Link to="/about"><h4>About</h4></Link> 
                </div>

            </div>

        </div>
    );
};

export default Menu;