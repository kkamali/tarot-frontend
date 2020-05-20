import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome'
import Spreads from './components/Spreads'
import Deck from './components/Deck'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/spreads" component={Spreads} />
        <Route exact path="/deck" component={Deck} />
      </div>
    </Router>
  );
}

export default App;
