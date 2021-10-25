import Header from '../Header';
import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ shoppingCart }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <div className="font-spartan">
      <Header navbar={navbarOpen} onClick={handleNavbar} />
      <div className={navbarOpen ? ' h-screen z-20 opacity-20' : ''}>
        <div className="h-32 bg-office bg-cover bg-center shadow-xl"></div>
        <div className="grid grid-cols-2 gap-2 justify-items-center pt-4 mx-4">
          {shoppingCart.map((cartItem) => {
            return (
              <div className="flex flex-col w-full h-auto border-black rounded-lg text-center shadow-lg">
                <img
                  className="pb-4 w-full h-full rounded-lg"
                  src={cartItem.image}
                  alt=""
                />
                <h3 className="p-2 text-lg ">{cartItem.title}</h3>
                <p className="p-2 text-sm">{cartItem.text}</p>
                <p>Quantity: {cartItem.amount}</p>
                <div>
                  <button className="px-3 m-2 py-1 shadow-md rounded-full">
                    +
                  </button>
                  <button className="px-3 m-2 py-1 shadow-md rounded-full">
                    -
                  </button>
                </div>
                <div className="flex justify-center">
                  <button className=" px-3 m-2 py-3 w-3/12 shadow-md rounded-full">
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
