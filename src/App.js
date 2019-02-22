import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './assets/js/Partials/Navigation'
import Home from './assets/js/Pages/Home'
import Login from './assets/js/Pages/Auth/Login'
import ClimbIndex from './assets/js/Climbs/ClimbIndex'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <div>
              <Navigation></Navigation>
              <Route exact path="/" component={Home}/>
              <Route path="/climbs" component={ClimbIndex}/>
              <Route path="/login" component={Login}/>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
