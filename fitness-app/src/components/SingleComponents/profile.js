import React from 'react';
import {Link} from 'react-router-dom';
function Profile(){
    function logout(){
        localStorage.clear();
    }
    return(
        <div>
            <div className="Nav">
                <Link to="/classes">All Classes</Link>
                <Link onClick={logout}to="/">Logout</Link>
            </div>
            <h1>Profile</h1>
        </div>
    )
}


export default Profile;