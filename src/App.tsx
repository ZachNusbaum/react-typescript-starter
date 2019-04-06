import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <HelloWorld name="Zach" />} />
        </Switch>
      </div>
    );
  }
}

export default App;
