import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/login/loginPage';
import SignUp from './components/signup/signUpPage';
import Home from './components/SingleComponents/homePage'
import About from './components/SingleComponents/about';
import Profile from './components/profile/profile'
import PrivateRoute from './components/SingleComponents/PrivateRoute'
import './App.css'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';


function initializeAnalytics(){
  const trackingId = "UA-164208266-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);
  ReactGA.pageview('/')
}


// ReactGA.set({
//   // userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })
// ReactGA.event({
//   category: "Sign Up",
//   action: "User pressed the big blue sign up button",
// });

const history = createBrowserHistory();


history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  initializeAnalytics();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route  path="/about" component={About}/>
          <PrivateRoute path="/profile" component={Profile}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/register" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
