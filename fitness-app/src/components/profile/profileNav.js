import React from 'react';
import {Link} from 'react-router-dom';
function profileNav(){
    function logout(){
        localStorage.clear();
        window.location.reload(true)
    }
    return(
        <div className="profileNav">
            <Link to="/profile/classes">View Classes</Link>
            <Link to="/profile/myclasses">My Classes</Link>
            <Link to="/profile/createclasses">Create a Class</Link>
            <Link to="/profile/discussions">Discussions</Link>
            <Link to="/profile/directmessages">Messages</Link>
            <Link onClick={logout} to="/">Log out</Link>
        </div>
    )
}
export default profileNav;