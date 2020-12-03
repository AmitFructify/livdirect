import React from "react";
import './App.scss';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartState,
  isCartOpen
} from './store/appReducer';
import Catalogue from "./views/Catalogue";
import StoreDetail from "./views/StoreDetail";
import ScreenQR from "./views/ScreenQR";
import Cart from "./views/Cart";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({isCartOpen: false}));
  }

  return (
    <div className="App">
      <div className="ScrollContainer">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/catalogue"><Catalogue /></Route>
          <Route path="/profile"><StoreDetail /></Route>
          <Route path="/qrscreen"><ScreenQR /></Route>
        </Switch>
        <Cart isOpen={useSelector(isCartOpen)} closeHandler={updateCartState}/>
      </div>
    </div>
  );
}

export default App;
