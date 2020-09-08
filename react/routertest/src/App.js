import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

    </div>
  );
}


export default App;
