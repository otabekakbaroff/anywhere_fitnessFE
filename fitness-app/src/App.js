import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/loginPage';
import SignUp from './components/signup/signUpPage';
import Home from './components/SingleComponents/homePage'
import Contact from './components/SingleComponents/contact';
import Profile from './components/SingleComponents/profile'
import PrivateRoute from './components/SingleComponents/PrivateRoute'
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  path="/contact" component={Contact}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/register" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
