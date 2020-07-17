import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { getRoutes } from './routes/index';

function App() {
  return (
    <Router>
    <div className="App">
      {getRoutes()}
    </div>
    </Router>
  );
}

export default App;
