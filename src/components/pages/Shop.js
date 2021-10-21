import Header from '../Header';
import React, { useState } from 'react';
import ShopCard from '../utilities/ShopCard';

const Shop = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="font-spartan ">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className={navbarOpen ? ' h-screen opacity-20 z-20' : ''}>
        <img src="./images/shop/shopmain.jpg" alt="leather couch"></img>
        <div className="grid grid-cols-1 justify-items-center pt-4">
          <ShopCard
            title="Modern Cabinet"
            text="Styled Modern Wood Cabinet"
            image="./images/shop/cabinet.jpeg"
          />
          <ShopCard
            title="Modern Cabinet"
            text="Styled Modern Wood Cabinet"
            image="./images/shop/cabinet.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
