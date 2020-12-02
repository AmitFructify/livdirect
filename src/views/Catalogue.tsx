import React from 'react';
import './Catalogue.scss';
import { Route, Switch, NavLink } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";

import StoreCard from "../components/StoreCard";
import StoreFilter from "../components/StoreFilter";
import Button from '../components/Button';
import Icon from '../components/Icon';

export default class Catalogue extends React.Component {
    render() {
      return (
        <div className="Catalogue">
          <Header/>
          <div className="tabs">
            <NavLink activeClassName="active" to={`/catalogue/stores`}>Physical Stores</NavLink>
            <NavLink activeClassName="active" to={`/catalogue/products`}>Products</NavLink>
            <NavLink activeClassName="active" to={`/catalogue/looks`}>Looks</NavLink>
          </div>

          <Switch>
            <Route path={`/catalogue/stores`}>
              <div className="storeListWrapper">
                <StoreFilter />
                <div className="heading">Stores near you</div>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
                <StoreCard/>
              </div>
              <Button className="mapsFloat"><Icon type="map" />Map</Button>
            </Route>
            <Route path={`/catalogue/products`}>
              <div style={{flex:1}}><h3>Products</h3></div>
            </Route>
            <Route path={`/catalogue/looks`}>
              <div style={{flex:1}}><h3>Looks</h3></div>
            </Route>
          </Switch>
          <Nav/>
        </div>
      );
    }
}