import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome'
import Spreads from './components/Spreads'
import Deck from './components/Deck'
import Dragonfly from './components/Dragonfly'
import Advice from './components/Advice'
import TrueLove from './components/TrueLove'
import Dreaming from './components/Dreaming'
import Pathways from './components/Pathways'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/spreads" component={Spreads} />
        <Route exact path="/deck" component={Deck} />
        <Route exact path="/dragonfly" component={Dragonfly} />
        <Route exact path="/advice" component={Advice} />
        <Route exact path="/love" component={TrueLove} />
        <Route exact path="/dreaming" component={Dreaming} />
        <Route exact path="/pathways" component={Pathways} />
      </div>
    </Router>
  );
}

export default App;
