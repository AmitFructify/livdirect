import React, { useState } from 'react';
import './StoreDetail.scss';
import { NavLink, useHistory } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Icon from "../components/Icon";

import Schedule from "./Schedule";
import { useDispatch } from 'react-redux';
import {
  setCartState
} from '../store/appReducer';

export default function Catalogue () {

  const [isOpen, setScheduleState] = useState(false);
  const history = useHistory();

  let handleBackClick = () => history.push("/catalogue/stores");
  let openSchedule = () => setScheduleState(true);
  let closeSchedule = () => setScheduleState(false);
 
  let handleQRClick = () => history.push("/qrscreen");

  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({isCartOpen: true}));
  }

  return (
    <div className="storeDetail">
      <div className="header">
        <Button className="secondary" type="icon" clickHandler={handleBackClick}><Icon type="back"/></Button>
        <div>
          <Button className="secondary cartButton" type="icon" clickHandler={handleQRClick}><Icon type="qr"/></Button>
          <Button className="secondary" type="icon" clickHandler={updateCartState}><Icon type="cart"/></Button>
        </div>
      </div>
      <div className="storeDetailContainer">
        <div className="detailPoster">
          
        </div>
        <div className="storeInfo">
          <div className="storeName">
            <span>Cherry Pick Furniture</span>
            <div className="actions">
              <Button className="transparent" type="icon"><Icon type="like"/></Button>
              <Button className="transparent" type="icon"><Icon type="share"/></Button>
            </div>
          </div>
          <div className="storeType">Furniture Store</div>
          <div className="rating"></div>
          <div className="address">Kormangala, 8th Block <Icon type="direction" size="mini"/></div>
          <div className="timings"><span className="open">Open now</span> - 10:30am-7:30pm (today) <Icon type="info" size="mini"/></div>
          <div className="indicators">
            <div className="">Sample Delivery<Icon type="tick" size="mini"/></div>
            <div className="">Virtual Assist<Icon type="tick" size="mini"/></div>
          </div>

        </div>
        <div className="storeProducts">
            <div className="heading">
              <span>Products</span>
              <Button className="transparent" type="icon"><Icon type="search"/></Button>
            </div>
            <div className="productList">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
        </div>
      </div>

      <div className="detailFooter">
        <Button className="primary" clickHandler={openSchedule}>Schedule Appointment</Button>
      </div>

      <Schedule isOpen={isOpen} closeHandler={closeSchedule}/>
    </div>
  );
}