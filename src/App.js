import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className=" font-spartan transition duration-500 ease-in-out bg-white ">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className={navbarOpen ? ' h-screen opacity-20 z-20' : ''}>
        <Carousel
          navbarOpen={navbarOpen}
          handleNavbar={handleNavbar}
          navbar={navbarOpen}
        />
        <MainContent />
      </div>
    </div>
  );
}

export default App;