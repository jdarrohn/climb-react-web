import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './partials/navigation'
import Footer from './partials/footer'
import Messages from './global/messages/messages'

import Home from './pages/home'
import Stats from './pages/stats'
import Login from './pages/login'
import Logout from './pages/logout'
import Climbs from './pages/climbs'

import ClimbShow from './climbs/climbShow'
import ClimbCreate from './climbs/climbCreate'

import { AuthenticatedProvider } from './auth/authenticatedContext'
import { MessagesProvider } from './global/messages/messagesContext'

export const App = () => {
  return (
    <AuthenticatedProvider>
      <MessagesProvider>
        <Router>
            <>
              <Navigation></Navigation>
              <Messages></Messages>
              <Route exact path="/" component={Home} />
              <Route exact path="/climbs" component={Climbs}/>
              <Route path="/climbs/:id" component={ClimbShow}/>
              <Route path="/climbs/set" component={ClimbCreate}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/stats" component={Stats}/>
              <Footer></Footer>
            </>
        </Router>
      </MessagesProvider>
    </AuthenticatedProvider>
  );
}

export default App;
