import React, { useState } from 'react';
import './StoreDetail.scss';
import { useHistory } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import Schedule from "./Schedule";
import { useDispatch } from 'react-redux';
import {
  setCartState
} from '../store/appReducer';

import {ReactComponent as QR} from '../icons/qr.svg';
import {ReactComponent as Cart} from '../icons/cart.svg';
import {ReactComponent as Search} from '../icons/search.svg';
import {ReactComponent as Info} from '../icons/info.svg';
import {ReactComponent as Share} from '../icons/share.svg';
import {ReactComponent as Like} from '../icons/like.svg';
import {ReactComponent as Direction} from '../icons/direction.svg';
import {ReactComponent as Rightarrow} from '../icons/rightarrow.svg';
import {ReactComponent as Tick} from '../icons/tick.svg';
import {ReactComponent as Star} from '../icons/star.svg';
import {ReactComponent as Starred} from '../icons/starred.svg';

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
        <Button className="secondary" type="icon" clickHandler={handleBackClick}><Rightarrow width="16px" height="16px"/></Button>
        <div className="actions">
          <Button className="secondary qrButton" type="icon" clickHandler={handleQRClick}><QR width="20px" height="20px"/></Button>
          <Button className="secondary" type="icon" clickHandler={updateCartState}><Cart width="20px" height="20px"/></Button>
        </div>
      </div>
      <div className="storeDetailContainer">
        <div className="detailPoster">
          
        </div>
        <div className="storeInfo">
          <div className="storeName">
            <span>Cherry Pick Furniture</span>
            <div className="actions">
              <Button className="transparent" type="icon"><Like  width="22px" height="22px"/></Button>
              <Button className="transparent" type="icon"><Share  width="20px" height="20px"/></Button>
            </div>
          </div>
          <div className="storeType">Furniture Store</div>
          <div className="rating">
            <Starred width="10px" height="10px"/>
            <Starred width="10px" height="10px"/>
            <Starred width="10px" height="10px"/>
            <Star width="10px" height="10px"/>
            <Star width="10px" height="10px"/>
          </div>
          <div className="address">Kormangala, 8th Block <Direction width="14px" height="14px"/></div>
          <div className="timings"><span className="open">Open now</span> - 10:30am-7:30pm (today) <Info width="14px" height="14px"/></div>
          <div className="indicators">
            <div className="">Sample Delivery<Tick width="14px" height="14px"/></div>
            <div className="">Virtual Assist<Tick width="14px" height="14px"/></div>
          </div>

        </div>
        <div className="storeProducts">
            <div className="heading">
              <span>Products</span>
              <Button className="transparent" type="icon"><Search width="16px" height="16px"/></Button>
            </div>
            <div className="productList">
              <ProductCard product={{id: 1}} />
              <ProductCard product={{id: 2}} />
              <ProductCard product={{id: 3}} />
              <ProductCard product={{id: 4}} />
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