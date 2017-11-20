import React from 'react';
import Classes from './Navigation.css';
import Scrapebutton from './Scrapebutton';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
  const navBarClass= Classes.Navbar;
    return(
        <Navbar className={navBarClass}>
         <Navbar.Header className={navBarClass}>
            <Navbar.Brand >
              <a href='/'> Scraper App </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <Scrapebutton />
          </Nav>
        </Navbar>
    );
}

export default Navigation;
