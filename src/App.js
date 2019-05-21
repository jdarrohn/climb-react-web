import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navigation from './partials/navigation'
import Home from './pages/home'
import ClimbIndex from './climbs/climbIndex'
import Login from './auth/login'
import { UserProvider } from './auth/userContext'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <Router>
            <div>
              <Navigation></Navigation>
              <Route exact path="/" component={Home}/>
              <Route path="/climbs" component={ClimbIndex}/>
              <Route path="/login" component={Login}/>
            </div>
        </Router>
      </UserProvider>
    );
  }
}

export default App;
