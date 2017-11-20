import React from 'react';
import { NavItem } from 'react-bootstrap';

const Scrapebutton = (props) => {
  return(
    <NavItem onClick={props.clicked}>Scrape for articles</NavItem>
  )
}

export default Scrapebutton;