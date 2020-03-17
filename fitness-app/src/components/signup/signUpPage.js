import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import Navbar from '../SingleComponents/header';
import InstructorRegister from './instructorSignUp';
import ClientRegister from './clientSignUp';
function SignupPage(){
    function ClientFocus(){
        let client = document.getElementById('register-client');
        let instructor = document.getElementById('register-instructor');
        client.style.backgroundColor="#e26b6b";
        client.style.color="white";
        instructor.style.backgroundColor="white";
        instructor.style.color="black";
    }
    function InstructorFocus(){
        let client = document.getElementById('register-client');
        let instructor = document.getElementById('register-instructor');
        instructor.style.backgroundColor="#e26b6b";
        instructor.style.color="white";
        client.style.backgroundColor="white";
        client.style.color="black";
    }
    return(
        <div className="signupPage">
             <Navbar/>
             <div className="signup">
            <Router>
                <div className="clientSignup">
                <h1 className="logo">Anywhere Fitness</h1>
                    <div className="signUpAs">
                        <Link onClick={ClientFocus} id="register-client" to="/register/client">Client</Link>
                        <Link onClick={InstructorFocus} id="register-instructor" to="/register/instructor">Instructor</Link>
                    </div>
                    <Switch>
                        <Route exact path="/register/instructor" component={InstructorRegister}/>
                        <Route exact path="/register/client" component={ClientRegister}/>
                    </Switch>
                </div>
            </Router>
            </div>
        </div>
    )
}


export default SignupPage;


 



