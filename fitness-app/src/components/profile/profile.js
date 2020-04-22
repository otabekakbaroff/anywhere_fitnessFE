import React from 'react';
import ProfileNav from "./profileNav"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createclass from './createclass';
import discussions from './discussions';
import messages from './messages';
import myclasses from './myclasses';
import AllClasses from './allClasses';
import Quotes from './quotes';
function Profile(){
    return(
        <div className="profile">
            <Router>
            <div className="Nav">
                <h1 className="profileLogo">Anywhere Fitness</h1>
            </div>
            <div className="profileContent">
            <div className="mainFrame">
                <div className="profileImage"></div>
                <div className="profileInfo">
                    <h1>Welcome {localStorage.getItem('firstname')}</h1>
                    <div>
                        <h4>Class Count: 2</h4>
                        <h4>Student Count: 50</h4>
                        <h4>Profession: Dancing Instructor</h4>
                        <h4>click to Edit Profile</h4>
                    </div>
                </div>
            </div>
            <ProfileNav/>
            </div>
            <div className="profileContent">
             <div className="classes">
                <Switch>
                    <Route  path="/profile/classes" component={AllClasses}/>
                    <Route  path="/profile/createclasses" component={createclass}/>
                    <Route  path="/profile/discussions" component={discussions}/>
                    <Route  path="/profile/directmessages" component={messages}/>
                    <Route  path="/profile/myclasses" component={myclasses}/>
                </Switch>
             </div>
             <Quotes/>
             </div>
            </Router>
        </div>
        
    )
}


export default Profile;