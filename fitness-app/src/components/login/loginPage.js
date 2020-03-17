import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import InstructorLogin from './instructorLogin';
import ClientLogin from './clientLogin';
import Navbar from '../SingleComponents/header';
function LoginPage(){
    function ClientFocus(){
        let client = document.getElementById('login-client');
        let instructor = document.getElementById('login-instructor');
        client.style.backgroundColor="#e26b6b";
        client.style.color="white";
        instructor.style.backgroundColor="white";
        instructor.style.color="black";
    }
    function InstructorFocus(){
        let client = document.getElementById('login-client');
        let instructor = document.getElementById('login-instructor');
        instructor.style.backgroundColor="#e26b6b";
        instructor.style.color="white";
        client.style.backgroundColor="white";
        client.style.color="black";
    }
    return(
        <div className="signupPage">
             <Navbar/>
             <div className="login">
            <Router>
            <div className="clientSignup">
            <h1 className="logo">Anywhere Fitness</h1>
            <div className="signUpAs">
                <Link onClick={ClientFocus} id="login-client" to="/login/client">Client</Link>
                <Link onClick={InstructorFocus} id="login-instructor" to="/login/instructor">Instructor</Link>
            </div>
                <Switch>
                    <Route exact path="/login/instructor" component={InstructorLogin}/>
                    <Route exact path="/login/client" component={ClientLogin}/>
                </Switch>
                </div>
            </Router>
            </div>
        </div>
    )
}

export default LoginPage;