import React from 'react';
import './Catalogue.scss';
import { Route, Switch, NavLink } from "react-router-dom";

import StoreCard from "../components/StoreCard";
import StoreFilter from "../components/StoreFilter";

export default class Catalogue extends React.Component {
    render() {
      return (
        <div className="Catalogue">
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
            </Route>
            <Route path={`/catalogue/products`}><h3>Products</h3></Route>
            <Route path={`/catalogue/looks`}><h3>Looks</h3></Route>
          </Switch>
        </div>
      );
    }
}