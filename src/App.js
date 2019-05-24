import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/home'
import Stats from './pages/stats'
import Login from './pages/login'

import Navigation from './partials/navigation'
import Footer from './partials/footer'

import Climbs from './pages/climbs'
import ClimbShow from './climbs/climbShow'
import { AuthenticatedProvider } from './auth/authenticatedContext'

export const App = () => {
  return (
    <AuthenticatedProvider>
      <Router>
          <>
            <Navigation></Navigation>
            <Route exact path="/" component={Home} />
            <Route exact path="/climbs" component={Climbs}/>
            <Route path="/climbs/:id" component={ClimbShow}/>
            <Route path="/login" component={Login}/>
            <Route path="/stats" component={Stats}/>
            <Footer></Footer>
          </>
      </Router>
    </AuthenticatedProvider>
  );
}

export default App;
