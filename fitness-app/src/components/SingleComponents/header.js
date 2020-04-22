import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    return(
        <div className="Nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/register/client">Sign Up</Link>
            <Link to="/login/client">Login</Link>
        </div>
    )
}
export default Navbar;