import React from "react";
import './App.scss';
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartState,
  isCartOpen
} from './store/appReducer';
import Catalogue from "./views/Catalogue";
import StoreDetail from "./views/StoreDetail";
import ScreenQR from "./views/ScreenQR";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";


function App() {
  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({isCartOpen: false}));
  }

  return (
    <div className="App">
      <div className="ScrollContainer">
      <Redirect to={{ pathname: '/catalogue/stores' }} />
        <Switch>
          <Route path="/project"><Catalogue /></Route>
          <Route path="/catalogue"><Catalogue /></Route>
          <Route path="/referrals"><Catalogue /></Route>
          <Route path="/alerts"><Catalogue /></Route>
          <Route path="/profile"><Catalogue /></Route>
          <Route path="/storedetail/:id"><StoreDetail /></Route>
          <Route path="/qrscreen"><ScreenQR /></Route>
          <Route path="/checkout"><Checkout /></Route>
        </Switch>
        <Cart isOpen={useSelector(isCartOpen)} closeHandler={updateCartState}/>
      </div>
    </div>
  );
}

export default App;