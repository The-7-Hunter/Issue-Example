import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrawerMenu from './menu/DrawerMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <DrawerMenu/>
      </div>
    );
  }
}

export default App;
