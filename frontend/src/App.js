import React from 'react';
import Downloader from './components/Downloader';
import './App.css';
import Headers from './components/Header.js'; 
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="app">
      <Headers/>
      <Downloader />
      <Footer/>
    </div>
  );
}

export default App;
