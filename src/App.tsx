import React from "react";
import './App.scss';
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
  setUserInfo,
  selectUserName
} from './store/appReducer';
import Catalogue from "./views/Catalogue";
import StoreDetail from "./views/StoreDetail";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="ScrollContainer">
        <Switch>
          <Route exact path="/"><Home />{ useSelector(selectUserName) } <button onClick={() => dispatch(setUserInfo({userId: "12", userName: "Parmar"})) }></button></Route>
          <Route path="/catalogue"><Catalogue /></Route>
          <Route path="/profile"><StoreDetail /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
