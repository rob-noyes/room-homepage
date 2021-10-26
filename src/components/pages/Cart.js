import Header from '../Header';
import React, { useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CartContent from '../utilities/CartContent';
import Footer from '../Footer';

const Cart = ({ shoppingCart, onRemove, addQuantity, removeQuantity }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="font-spartan">
      <div>
        <Header navbar={navbarOpen} onClick={handleNavbar} />
        <div className={navbarOpen ? ' h-screen z-20 opacity-20' : ''}>
          <div className="h-32 bg-office bg-cover bg-center shadow-xl"></div>
          <div className="flex flex-row justify-start mx-4 mt-6">
            <button className="p-2">
              <Link to="/shop" className="flex items-center text-md">
                <MdArrowBackIos />
                <span className="">Back to Shop</span>
              </Link>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 justify-items-center pt-4 mx-4 p-2 md:grid-cols-3 md:gap-16 md:mx-32 md:my-16">
            {shoppingCart.map((cartItem) => {
              return (
                <CartContent
                  removeQuantity={() => removeQuantity(cartItem)}
                  addQuantity={() => addQuantity(cartItem)}
                  cartItem={cartItem}
                  onRemove={() => onRemove(cartItem)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
