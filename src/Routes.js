import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import App from './App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';

const Routes = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [products] = useState([
    {
      id: 1,
      title: 'Modern Cabinet',
      text: 'Styled Modern Wood Cabinet',
      image: './room-homepage/images/shop/cabinet.jpeg',
      amount: 1,
    },
    {
      id: 2,
      title: 'Modern Dark Stool',
      text: 'Elegent Styled Modern Stool',
      image: './room-homepage/images/shop/stool.jpg',
      amount: 1,
    },
    {
      id: 3,
      title: 'Nightstand',
      text: 'Elegent Styled Modern Stool',
      image: './room-homepage/images/shop/nightstand.jpg',
      amount: 1,
    },
    {
      id: 4,
      title: 'Dresser',
      text: 'Mid Century Modern Dresser',
      image: './room-homepage/images/shop/dresser.jpg',
      amount: 1,
    },
    {
      id: 5,
      title: 'Pink Chair',
      text: 'Modern Pink Armchair',
      image: './room-homepage/images/shop/pinkchair.jpg',
      amount: 1,
    },
    {
      id: 6,
      title: 'Armless Chair',
      text: 'Sleek Retro Style Armless Chair',
      image: './room-homepage/images/shop/armlesschair.jpg',
      amount: 1,
    },
  ]);

  const addToCart = (event) => {
    let cartCopy = shoppingCart.map((event) => event.id);
    if (
      shoppingCart[event.id] === undefined ||
      shoppingCart[event.id] === cartCopy[event]
    ) {
      setShoppingCart((shoppingCart) => [...shoppingCart, event]);
    } else {
      alert('Item has already been added to Cart');
    }
  };

  const removeFromCart = (event) => {
    let cartCopy = [...shoppingCart];
    cartCopy = cartCopy.filter((cartItem) => cartItem.id !== event.id);
    setShoppingCart(cartCopy);
  };

  const addQuantity = (item) => {
    console.log(item);
    item.amount += 1;
    setShoppingCart([...shoppingCart]);
  };

  const removeQuantity = (item) => {
    if (item.amount > 1) {
      item.amount -= 1;
    } else {
      alert("Item can't have less than one in quantity, please delete item.");
    }
    setShoppingCart([...shoppingCart]);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={() => <App />} />
        <Route
          exact
          path="/cart"
          component={() => (
            <Cart
              shoppingCart={shoppingCart}
              onRemove={removeFromCart}
              addQuantity={addQuantity}
              removeQuantity={removeQuantity}
            />
          )}
        />
        <Route
          exact
          path="/shop"
          component={() => (
            <Shop
              products={products}
              shoppingCart={shoppingCart}
              onAdd={addToCart}
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
