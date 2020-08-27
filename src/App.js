import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <h1>SPA Online Course</h1>
      <Body></Body>
    </div>
  );
}

export default App;
