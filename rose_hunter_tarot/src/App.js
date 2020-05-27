import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome'
import Spreads from './components/Spreads'
import Deck from './components/Deck'
import Dragonfly from './components/Dragonfly'
import Advice from './components/Advice'
import Dreaming from './components/Dreaming'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/spreads" component={Spreads} />
        <Route exact path="/deck" component={Deck} />
        <Route exact path="/dragonfly" component={Dragonfly} />
        <Route exact path="/advice" component={Advice} />
        <Route exact path="/dreaming" component={Dreaming} />
      </div>
    </Router>
  );
}

export default App;
