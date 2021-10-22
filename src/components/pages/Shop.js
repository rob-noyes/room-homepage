import Header from '../Header';
import React, { useState } from 'react';
import ShopCard from '../utilities/ShopCard';

const Shop = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: 'Modern Cabinet',
      text: 'Styled Modern Wood Cabinet',
      image: './images/shop/cabinet.jpeg',
    },
    {
      id: 1,
      title: 'Stool',
      text: 'Elegent Styled Modern Stool',
      image: './images/shop/stool.jpg',
    },
    {
      id: 2,
      title: 'Nightstand',
      text: 'Elegent Styled Modern Stool',
      image: './images/shop/nightstand.jpg',
    },
    {
      id: 3,
      title: 'Dresser',
      text: 'Mid Century Modern Dresser',
      image: './images/shop/dresser.jpg',
    },
    {
      id: 4,
      title: 'Pink Chair',
      text: 'Modern Pink Armchair',
      image: './images/shop/pinkchair.jpg',
    },
    {
      id: 5,
      title: 'Armless Chair',
      text: 'Sleek Retro Style Armless Chair',
      image: './images/shop/armlesschair.jpg',
    },
  ]);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="font-spartan ">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className={navbarOpen ? ' h-screen opacity-20 z-20' : ''}>
        <img src="./images/shop/greencouch.jpg" alt="leather couch"></img>
        <div className="grid grid-cols-1 justify-items-center pt-4">
          {products.map((product) => {
            return (
              <ShopCard
                key={product.id}
                title={product.title}
                text={product.text}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
