import React, { Fragment, useState } from 'react';
import './Catalogue.scss';
import { Route, Switch, NavLink, useHistory } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";

import StoreCard from "../components/StoreCard";
import StoreFilter from "../components/StoreFilter";
import Button from '../components/Button';
import Icon from '../components/Icon';

interface IStoreListProps{};

const Catalogue: React.FC<IStoreListProps> = (props: IStoreListProps) => {

  const history = useHistory();
  const [isListMode, setListMode] = useState(true);
  const changeListMode = () => {
    setListMode(!isListMode);
  }
  const clickQR = () => history.push("/qrscreen")

  return (
    <div className="Catalogue">
      <Header qrClickHandle={clickQR}/>
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
            { isListMode &&
            <Fragment>
              <StoreCard/>
              <StoreCard/>
              <StoreCard/>
              <StoreCard/>
            </Fragment>
            }

            { !isListMode &&
              <Fragment>
                Map
              </Fragment>
            }
          </div>
          <Button className="mapsFloat" clickHandler={changeListMode}><Icon type="map" />{isListMode? "Map" : "List"}</Button>
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
};

export default Catalogue;