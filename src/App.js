import './App.css';
import React from 'react';
import reactDom from 'react-dom';

//import components
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Checkout from './component/Checkout';

//import switch
import {Switch, Route} from "react-router-dom";

//show resumestore app
function App() {
  return (
    <>
      
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/products/:id" component={Product}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>

      
    </>
  );
}

export default App;
