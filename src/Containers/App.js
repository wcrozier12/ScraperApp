import React, { Component } from 'react';
import Classes from './App.css';
import Layout from './Layout/Layout';

class App extends Component {
  render() {
    const appStyle=Classes.App;
    return (
        <div className={appStyle}>
          <Layout />
        </div>
    );
  }
}

export default App;
