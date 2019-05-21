import React, { useContext, useEffect } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

import { UserContext } from '../auth/userContext'

import { Link } from 'react-router-dom'

export default function Navigation() {
  const { currentUser } = useContext(UserContext);

  // think of this like componentDidMount
  useEffect(() => {
    console.log(currentUser);
  }, []);

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
              { !currentUser &&
                <NavItem>
                    <Link className="nav-link text-white" to={'/login'}>
                      Login
                    </Link>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );

}