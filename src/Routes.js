import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import App from './App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';

const Routes = () => {
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 0,
      title: 'Modern Cabinet',
      text: 'Styled Modern Wood Cabinet',
      image: './images/shop/cabinet.jpeg',
      amount: 1,
    },
    {
      id: 1,
      title: 'Modern Dark Stool',
      text: 'Elegent Styled Modern Stool',
      image: './images/shop/stool.jpg',
      amount: 1,
    },
  ]);
  const [products, setProducts] = useState([
    {
      id: 0,
      title: 'Modern Cabinet',
      text: 'Styled Modern Wood Cabinet',
      image: './images/shop/cabinet.jpeg',
      amount: 1,
    },
    {
      id: 1,
      title: 'Modern Dark Stool',
      text: 'Elegent Styled Modern Stool',
      image: './images/shop/stool.jpg',
      amount: 1,
    },
    {
      id: 2,
      title: 'Nightstand',
      text: 'Elegent Styled Modern Stool',
      image: './images/shop/nightstand.jpg',
      amount: 1,
    },
    {
      id: 3,
      title: 'Dresser',
      text: 'Mid Century Modern Dresser',
      image: './images/shop/dresser.jpg',
      amount: 1,
    },
    {
      id: 4,
      title: 'Pink Chair',
      text: 'Modern Pink Armchair',
      image: './images/shop/pinkchair.jpg',
      amount: 1,
    },
    {
      id: 5,
      title: 'Armless Chair',
      text: 'Sleek Retro Style Armless Chair',
      image: './images/shop/armlesschair.jpg',
      amount: 1,
    },
  ]);

  const addToCart = (event) => {
    setShoppingCart((shoppingCart) => [...shoppingCart, event]);
  };

  const removeFromCart = (event) => {
    let cartCopy = [...shoppingCart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== event.id);
    setShoppingCart(cartCopy);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <App />} />
        <Route
          exact
          path="/cart"
          component={() => <Cart shoppingCart={shoppingCart} />}
        />
        <Route
          exact
          path="/shop"
          component={() => (
            <Shop
              products={products}
              shoppingCart={shoppingCart}
              onClick={addToCart}
            />
          )}
        />
        <Route exact Path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
