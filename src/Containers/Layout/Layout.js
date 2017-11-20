import React, { Component } from 'react';
import axios from 'axios';

import Classes from './Layout.css';
import Navigation from '../../Components/NavBar/Navigation';
import Article from '../../Components/Articles/Article';


class Layout extends Component {
  
  render() {
    const containerStyle = Classes.articleContainer;
    return (
      <div className="Layout">
        <section>
          <Navigation />
        </section>
        <div className={containerStyle}>
          <Article image='https://i.redd.it/5g708b0541zz.jpg' />
          <Article image='https://i.redd.it/qi8fion9qxyz.jpg'/>
          <Article image='https://static1.squarespace.com/static/5755d322b654f9b7a7138680/589d78b7c534a5719af3f709/589d79908419c25ff480a396/1496978129890/volcanicautumn1600.jpg?format=2500w'/>
          <Article image='https://i.redd.it/58noz2apt0zz.jpg'/>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    );
  }
}

export default Layout;
