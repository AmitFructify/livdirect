import React, { useState, Fragment, useEffect } from 'react';
import './StoreDetail.scss';
import { useHistory, useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Button from "../components/Button";

import Schedule from "./Schedule";
import { useDispatch, useSelector } from 'react-redux';
import {
  setCartState,
  newInCart,
  setNewInCart
} from '../store/appReducer';
import {
  storeById,
  storeProducts,
  fetchStoreProducts,
  updateProduct
} from '../store/catalogueReducer';

import { ReactComponent as QR } from '../icons/qr.svg';
import { ReactComponent as Cart } from '../icons/cart.svg';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Like } from '../icons/like.svg';
import { ReactComponent as Direction } from '../icons/direction.svg';
import { ReactComponent as Rightarrow } from '../icons/rightarrow.svg';
import { ReactComponent as Tick } from '../icons/tick.svg';
import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as Starred } from '../icons/starred.svg';

export default function Catalogue() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isOpen, setScheduleState] = useState(false);

  let { id }: any = useParams();
  useEffect(() => {
    dispatch(fetchStoreProducts(id));
  }, [id, dispatch]);

  let handleBackClick = () => history.push("/catalogue/stores");
  let openSchedule = () => setScheduleState(true);
  let closeSchedule = () => setScheduleState(false);

  const isNewCartItem = useSelector(newInCart);

  let handleQRClick = () => history.push("/qrscreen");

  const updateCartState = () => {
    dispatch(setNewInCart(false));
    dispatch(setCartState({ isCartOpen: true }));
  }

  const updateProductHandler = (updateObj: {productId: number, request: any}) => {
    dispatch(updateProduct(updateObj)).then(() => {
      dispatch(fetchStoreProducts(id));
    });
  };

  const store = useSelector((state) => storeById(state, id));
  const currentStoreProducts = useSelector(storeProducts);

  let ratings = [];
  if (store) {
    for (let i = 0; i < 5; i++) {
      if (i < store.ratings) {
        ratings.push(<Starred width="10px" height="10px" fill="#eb595f" key={store.display_name + i} />);
      } else {
        ratings.push(<Star width="10px" height="10px" fill="#796e76" key={store.display_name + i} />);
      }
    }
  }

  return (
    <div className="storeDetail">
      <div className="header">
        <Button className="secondary" type="icon" clickHandler={handleBackClick}><Rightarrow width="16px" height="16px" /></Button>
        <div className={`actions cart ${isNewCartItem?"newInCart":""}`}>
          <Button className="secondary qrButton" type="icon" clickHandler={handleQRClick}><QR width="20px" height="20px" /></Button>
          <Button className="secondary" type="icon" clickHandler={updateCartState}><Cart width="20px" height="20px" /></Button>
        </div>
      </div>
      {store &&
        <Fragment>
          <div className="storeDetailContainer">
            <div className="detailPoster" style={{ backgroundImage: `url(${store.image})` }}>

            </div>
            <div className="storeInfo">
              <div className="storeName">
                <span>{store.display_name}</span>
                <div className="actions">
                  <Button className="transparent" type="icon"><Like width="22px" height="22px" /></Button>
                  <Button className="transparent" type="icon"><Share width="20px" height="20px" /></Button>
                </div>
              </div>
              <div className="storeType">{store.store_kind}</div>
              <div className="rating">
                {ratings}
              </div>
              <div className="address">{store.address}<Direction width="14px" height="14px" /></div>
              <div className="timings"><span className="open">Open now</span> - {store.open_slot} (today) <Info width="13px" height="13px" /></div>
              <div className="indicators">
                {store.sample_delivery && <div className="">Sample Delivery<Tick width="14px" height="14px" fill="#44a058" /></div>
                }
                {store.virtual_assistance && <div className="">Virtual Assist<Tick width="14px" height="14px" fill="#44a058" /></div>
                }

              </div>

            </div>
            {currentStoreProducts && <div className="storeProducts">
              <div className="heading">
                <span>Products</span>
                <Button className="transparent" type="icon"><Search width="16px" height="16px" /></Button>
              </div>
              <div className="productList">
                {currentStoreProducts.map((currentProduct: any) => {
                  return <ProductCard product={currentProduct} key={currentProduct.id} updateProduct={updateProductHandler}/>
                })}
              </div>
            </div>}
          </div>

          <div className="detailFooter">
            <Button className="primary" clickHandler={openSchedule}>Schedule Appointment</Button>
          </div>

          <Schedule isOpen={isOpen} closeHandler={closeSchedule} storeAddress={store.address}/>
        </Fragment>
      }
    </div>
  );
}