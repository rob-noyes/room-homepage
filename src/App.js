import React, { useState } from 'react';
import './styles/App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className=" font-spartan transition duration-500 ease-in-out bg-white w-screen ">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className={navbarOpen ? ' h-screen opacity-20 z-20' : ''}>
        <Carousel
          navbarOpen={navbarOpen}
          handleNavbar={handleNavbar}
          navbar={navbarOpen}
        />
        <div className="lg:h-full">
          <MainContent />
        </div>
      </div>
      <div className="flex bottom-0 left-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
