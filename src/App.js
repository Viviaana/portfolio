import React from 'react';
import './App.css';
import {BrowserRouter as Router,} from "react-router-dom";
import Container from './components/Container';
import Header from './components/Header';




function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      </div>
      <div>
      <Container />
    </div>
    </Router>
  );
}

export default App;


