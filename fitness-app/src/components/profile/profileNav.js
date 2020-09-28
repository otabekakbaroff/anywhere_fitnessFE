import React from 'react';
import {Link} from 'react-router-dom';
function profileNav(){
    function logout(){
        localStorage.clear();
        window.location.reload(true)
    }
    if(localStorage.getItem("status") === "instructor"){
        return(
            <div className="profileNav">
                <Link to="/profile/classes">View Classes</Link>
                <Link to="/profile/myclasses">My Classes</Link>
                <Link to="/profile/createclasses">Create a Class</Link>
                <Link onClick={logout} to="/">Log out</Link>
            </div>
        )
    }else{
        return(
            <div className="profileNav">
                <Link to="/profile/classes">View Classes</Link>
                <Link to="/profile/myclasses">My Classes</Link>
                <Link onClick={logout} to="/">Log out</Link>
            </div>
        )
    }
}
export default profileNav;