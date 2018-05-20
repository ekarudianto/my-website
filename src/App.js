import React, { Component } from 'react';
import 'normalize.css';
import Home from './components/Home';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    };
  }

  render() {
    return (
      <Home />
    );
  }
}

export default App;
