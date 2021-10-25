import Header from '../Header';
import React, { useState } from 'react';
import ShopCard from '../utilities/ShopCard';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Shop = ({ products, shoppingCart, onClick }) => {
  // const addToCart = (event) => {
  //   console.log(event.target.value);
  //   setShoppingCart((shoppingCart) => [...shoppingCart, event.target.value]);
  //   console.log(shoppingCart);
  // };

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
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
      <div className={navbarOpen ? ' h-screen z-20 opacity-20' : ''}>
        <img src="./images/shop/greencouch.jpg" alt="leather couch"></img>
        <div className="grid grid-cols-2 gap-3 justify-items-center pt-4 mx-4">
          {products.map((product) => {
            return (
              <ShopCard
                key={product.id}
                value={product}
                title={product.title}
                text={product.text}
                image={product.image}
                clickAdd={() => onClick(product)}
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
