import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome'
import Spreads from './components/Spreads'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/spreads" component={Spreads} />
      </div>
    </Router>
  );
}

export default App;
