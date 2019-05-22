import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Stats from './pages/stats'
import Login from './pages/login'

import Navigation from './partials/navigation'
import ClimbIndex from './pages/climbsIndex'
import { AuthenticatedProvider } from './auth/authenticatedContext'

export const App = () => {
  return (
    <AuthenticatedProvider>
      <Router>
          <div>
            <Navigation></Navigation>
            <Route exact path="/" component={Home} />
            <Route path="/climbs" component={ClimbIndex}/>
            <Route path="/login" component={Login}/>
            <Route path="/stats" component={Stats}/>
          </div>
      </Router>
    </AuthenticatedProvider>
  );
}

export default App;
