import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Explore from './components/Explore';
import FAQ from './components/FAQ';
import Footer from './components/Footer';


const App = () => {
  return (
    <div  >
  
      <Header />
      <Main />
      <Features />
      <About />
      <Tokenomics />
      <Roadmap />
      <FAQ />
      <Explore />
      <Footer />
    </div>

  );
};

export default App;
