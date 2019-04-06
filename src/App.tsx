import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HelloWorld name="Zach" />
      </div>
    );
  }
}

export default App;
