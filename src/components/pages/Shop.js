import Header from '../Header';
import React, { useState, useEffect } from 'react';
import ShopCard from '../utilities/ShopCard';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Shop = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
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
      title: 'Modern Dark Stool',
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

  const addToCart = (event) => {
    setShoppingCart((shoppingCart) => [...shoppingCart, event.target.value]);
    console.log(shoppingCart);
  };

  return (
    <div className="font-spartan ">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div
        className={
          navbarOpen
            ? 'hidden'
            : 'fixed z-30 bg-gray-400 rounded-full bg-opacity-70 right-0 m-5 p-2 mt-9 text-2xl text-white'
        }
      >
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
      </div>
      <div className={navbarOpen ? ' h-screen opacity-20 z-20' : 'mb-5'}>
        <img src="./images/shop/greencouch.jpg" alt="leather couch"></img>
        <div className="grid grid-cols-2 gap-3 justify-items-center pt-4 mx-4">
          {products.map((product) => {
            return (
              <ShopCard
                key={product.id}
                product={product}
                title={product.title}
                text={product.text}
                image={product.image}
                clickAdd={addToCart}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
