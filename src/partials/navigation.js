import React, { useContext } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

import { AuthenticatedContext } from '../auth/authenticatedContext'

import { Link } from 'react-router-dom'

export default () => {

  const authenticatedUser = useContext(AuthenticatedContext);
  const currentUser = authenticatedUser.currentUser;

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <Container>
          <Link className="nav-link text-white" to={'/'}>
            Ready, Set, Climb!
          </Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link className="nav-link text-white" to={'/climbs'}>
                    Climbs
                  </Link>
              </NavItem>
              { currentUser && Object.keys(currentUser).length ? (
                  <>
                    <NavItem>
                      <Link className="nav-link text-white" to={'/stats'}>
                        Stats
                      </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link text-white" to={'/logout'}>
                          Logout
                        </Link>
                    </NavItem>
                  </>
                ) : (
                  <NavItem>
                      <Link className="nav-link text-white" to={'/login'}>
                        Login
                      </Link>
                  </NavItem>
                )
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );

}