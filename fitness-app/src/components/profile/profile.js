import React from 'react';
import ProfileNav from "./profileNav"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Createclass from './createclass';
import Discussions from './discussions';
import Messages from './messages';
import Myclasses from './myclasses';
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
                    <div className="stats">
                        <div>
                            <p>Signed Up Classes</p>
                            <p>10</p>
                        </div>
                        <div>    
                            <p>Classes Completed</p>
                            <p>10</p>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileNav/>
            </div>
            <div className="profileContent">
             <div className="classes">
                <Switch>
                    <Route  path="/profile/classes" component={AllClasses}/>
                    <Route  path="/profile/createclasses" component={Createclass}/>
                    <Route  path="/profile/discussions" component={Discussions}/>
                    <Route  path="/profile/directmessages" component={Messages}/>
                    <Route  path="/profile/myclasses" component={Myclasses}/>
                </Switch>
             </div>
             <Quotes/>
             </div>
            </Router>
        </div>
        
    )
}


export default Profile;