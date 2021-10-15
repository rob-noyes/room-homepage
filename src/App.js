import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="bg-gray-400 h-screen">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
    </div>
  );
}

export default App;
