import React, { Fragment, useEffect, useState } from 'react';
import './Catalogue.scss';
import { Route, Switch, NavLink, useHistory } from "react-router-dom";

import Header from "../components/Header";
import Nav from "../components/Nav";

import StoreCard from "../components/StoreCard";
import StoreFilter from "../components/StoreFilter";
import Button from '../components/Button';
import GoogleMap from '../components/GoogleMap';

import { ReactComponent as Tick } from '../icons/tick.svg';
import { ReactComponent as Map } from '../icons/map.svg';
import { ReactComponent as List } from '../icons/list.svg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchStores, storeList, filters, setFilters } from "../store/catalogueReducer";

interface IStoreListProps { };

const Catalogue: React.FC<IStoreListProps> = (props: IStoreListProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [isListMode, setListMode] = useState(true);
  const [isFilterOpen, setFilterState] = useState(false);

  const changeListMode = () => {
    setListMode(!isListMode);
  }
  const clickQR = () => history.push("/qrscreen");


  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);


  const currentFilter = [...useSelector(filters)];
  const storeItems = useSelector(storeList).map((store: any) =>
    <StoreCard store={store} key={store.id} />
  );

  const toggleFilterPopup = () => setFilterState(!isFilterOpen);
  const toggleFilter = (filterName: string) => {
    if (currentFilter.includes(filterName)) {
      currentFilter.splice(currentFilter.indexOf(filterName), 1);
    } else {
      currentFilter.push(filterName);
    }

    dispatch(setFilters(currentFilter));
  }



  return (
    <div className="Catalogue">
      <Header qrClickHandle={clickQR} />
      <div className="tabs">
        <NavLink activeClassName="active" to={`/catalogue/stores`}>Physical Stores</NavLink>
        <NavLink activeClassName="active" to={`/catalogue/products`}>Products</NavLink>
        <NavLink activeClassName="active" to={`/catalogue/looks`}>Looks</NavLink>
      </div>

      <Switch>
        <Route exact path={`/project`}>
          <div style={{ flex: 1 }}><h3>Project</h3></div>
        </Route>
        <Route exact path={`/referrals`}>
          <div style={{ flex: 1 }}><h3>Refferals</h3></div>
        </Route>
        <Route exact path={`/alerts`}>
          <div style={{ flex: 1 }}><h3>Alerts</h3></div>
        </Route>
        <Route exact path={`/profile`}>
          <div style={{ flex: 1 }}><h3>Profile</h3></div>
        </Route>

        <Route exact path={`/catalogue/stores`}>
          <div className="storeListWrapper">
            <StoreFilter clickHandler={toggleFilterPopup} />
            <div className={`filterList ${isFilterOpen ? "open" : ""}`}>
              <div className="filter" onClick={() => toggleFilter("Near Me")}>
                <span>Near Me</span>
                {currentFilter.includes("Near Me") &&
                  <Tick width="14px" height="14px" />
                }
              </div>
              <div className="filter" onClick={() => toggleFilter("Sample Delivery")}>
                <span>Sample Delivery</span>
                {currentFilter.includes("Sample Delivery") &&
                  <Tick width="14px" height="14px" />
                }
              </div>
              <div className="filter" onClick={() => toggleFilter("Virtual Assist")}>
                <span>Virtual Assist</span>
                {currentFilter.includes("Virtual Assist") &&
                  <Tick width="14px" height="14px" />
                }
              </div>
            </div>
            <div className="heading">Stores near you</div>
            {isListMode &&
              <Fragment>
                {storeItems}
              </Fragment>
            }

            {!isListMode &&
              <GoogleMap />
            }
          </div>
          <Button className="mapsFloat" clickHandler={changeListMode}>
            {isListMode &&
              <Map height="16px" width="16px" />
            }
            {!isListMode &&
              <List height="16px" width="16px" />
            }
            {isListMode ? "Map" : "List"}
          </Button>
        </Route>
        <Route path={`/catalogue/products`}>
          <div style={{ flex: 1 }}><h3>Products</h3></div>
        </Route>
        <Route path={`/catalogue/looks`}>
          <div style={{ flex: 1 }}><h3>Looks</h3></div>
        </Route>
      </Switch>
      <Nav />
    </div>
  );
};

export default Catalogue;