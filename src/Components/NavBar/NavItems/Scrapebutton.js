import React from 'react';
import Classes from './Scrapebutton.css';

const Scrapebutton = (props) => {
  return(
    <button className={Classes.ScrapeButton} onClick={props.handleScrapeClick}>Find Articles</button>
  )
}

export default Scrapebutton;