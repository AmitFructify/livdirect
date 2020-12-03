import React, { Fragment, useEffect, useState } from 'react';
import './Catalogue.scss';
import { Route, Switch, NavLink, useHistory } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";

import StoreCard from "../components/StoreCard";
import StoreFilter from "../components/StoreFilter";
import Button from '../components/Button';
import Icon from '../components/Icon';

import { useDispatch, useSelector } from 'react-redux';
import { fetchStores, storeList, filters, setFilters } from "../store/catalogueReducer";

interface IStoreListProps{};

const Catalogue: React.FC<IStoreListProps> = (props: IStoreListProps) => {

  const history = useHistory();
  const [isListMode, setListMode] = useState(true);
  const [isFilterOpen, setFilterState] = useState(false);

  const changeListMode = () => {
    setListMode(!isListMode);
  }
  const clickQR = () => history.push("/qrscreen")

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchStores());
  });

  const storeItems = useSelector(storeList).map((store: any) =>
    <StoreCard key={store.id}/>
  );

  const toggleFilterPopup = () => setFilterState(!isFilterOpen);
  let currentFilter = [...useSelector(filters)];
  const toggleFilter = (filterName: string) =>  {
    if(currentFilter.includes(filterName)) {
      currentFilter.splice(currentFilter.indexOf(filterName), 1);
    } else {
      currentFilter.push(filterName);
    }

    dispatch(setFilters(currentFilter));
  }



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
            <StoreFilter clickHandler={toggleFilterPopup}/>
            <div className={`filterList ${isFilterOpen? "open" : ""}`}>
              <div className="filter" onClick={() => toggleFilter("Near Me")}><span>Near Me</span><Icon type={`${currentFilter.includes("Near Me")?"tick":""}`}/></div>
              <div className="filter" onClick={() => toggleFilter("Sample Delivery")}><span>Sample Delivery</span><Icon type={`${currentFilter.includes("Sample Delivery")?"tick":""}`}/></div>
              <div className="filter" onClick={() => toggleFilter("Virtual Assist")}><span>Virtual Assist</span><Icon type={`${currentFilter.includes("Virtual Assist")?"tick":""}`}/></div>
            </div>
            <div className="heading">Stores near you</div>
            { isListMode &&
              <Fragment>
                {storeItems}
              </Fragment>
            }

            { !isListMode &&
              <Fragment>
                Map
              </Fragment>
            }
          </div>
          <Button className="mapsFloat" clickHandler={changeListMode}>
            { isListMode &&
              <Icon type="map" />
            }
            { !isListMode &&
              <Icon type="list" />
            }
            {isListMode? "Map" : "List"}
          </Button>
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