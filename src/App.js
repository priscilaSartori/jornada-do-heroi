import React from 'react';
import './App.css';
import Heroi from './pages/Heroi'
import Sidenav from './components/Sidenav';
import Header from './components/Header';

function App() {
  
  return (
    <div className="App">
        <Header />
        <Sidenav />
        <Heroi />
    </div>
  );
}

export default App;
