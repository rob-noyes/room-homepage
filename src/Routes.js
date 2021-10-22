import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/shop" component={Shop} />
        <Route exact Path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
