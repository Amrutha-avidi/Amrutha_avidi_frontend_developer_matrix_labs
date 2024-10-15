import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import About from './components/About';
import Tokenomics from './components/Tokenomics';





const App = () => {
  return (
    <div className='bg-black-100 min-h-screen'>
      <Header />
      <Main />
      <Features />
      <About />
      <Tokenomics />
    </div>

  );
};

export default App;
