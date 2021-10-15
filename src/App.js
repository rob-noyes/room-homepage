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
    <div
      className={
        navbarOpen
          ? 'transition duration-500 ease-in-out bg-gray-400 z-10 h-screen'
          : 'transition duration-500 ease-in-out bg-gray-600 h-screen'
      }
    >
      <Carousel navbarOpen={navbarOpen} handleNavbar={handleNavbar} />
      <MainContent />
    </div>
  );
}

export default App;
