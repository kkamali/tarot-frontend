import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Welcome} />
      </Router>
    </div>
  );
}

export default App;
