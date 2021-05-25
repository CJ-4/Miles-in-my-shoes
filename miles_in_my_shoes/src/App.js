import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateLog from './CreateLog';
import ShowLog from './ShowLog';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowLog} />
          <Route path='/create-log' component={CreateLog} />
        </div>
      </Router>
    );
  }
}

export default App;
