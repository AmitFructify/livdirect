import React from "react";
import './App.scss';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  setUserInfo,
  selectUserName
} from './store/appReducer';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Catalogue from "./views/Catalogue";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header/>
      <div className="ScrollContainer">
        <Switch>
          <Route exact path="/"><Home />{ useSelector(selectUserName) } <button onClick={() => dispatch(setUserInfo({userId: "12", userName: "Parmar"})) }></button></Route>
          <Route path="/catalogue"><Catalogue /></Route>
        </Switch>
      </div>
      <Nav/>
    </div>
  );
}

export default App;
