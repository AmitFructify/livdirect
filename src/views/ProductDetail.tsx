

import React, { useState, useEffect, Fragment } from 'react';
import './ProductDetail.scss';
import { useHistory, useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Icon from "../components/Icon";

import { useDispatch, useSelector } from 'react-redux';
import {
  setCartState,
  setToaster
} from '../store/appReducer';
import {
  fetchProduct,
  product
} from '../store/catalogueReducer';

import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Like } from '../icons/like.svg';
import { ReactComponent as Liked } from '../icons/liked.svg';
import { ReactComponent as Info } from '../icons/info.svg';
import { ReactComponent as Cart } from '../icons/cart.svg';
import { ReactComponent as Rightarrow } from '../icons/rightarrow.svg';

export default function Catalogue() {
  const history = useHistory();
  const dispatch = useDispatch();

  let { id }: any = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
  },[product]);

  const currentProduct = useSelector(product);


  let handleBackClick = () => history.goBack();

  const updateCartState = () => {
    dispatch(setCartState({ isCartOpen: true }));
  }

  const addToCart = () => {
    dispatch(setToaster({ message: "Item added to your cart", type: "info", isOpen: true }));
    setTimeout(() => {
      dispatch(setToaster({ message: "", type: "", isOpen: false }));
    }, 3000);
  };

  return (
    <div className="productDetail">
      {currentProduct && <Fragment><div className="header">
        <Button className="secondary" type="icon" clickHandler={handleBackClick}><Rightarrow width="16px" height="16px" /></Button>
        <div>
          <Button className="secondary" type="icon" clickHandler={updateCartState}><Cart width="20px" height="20px" /></Button>
        </div>
      </div>
        <div className="productDetailContainer">
          <div className="detailPoster" style={{ backgroundImage: `url(${currentProduct.image})` }}>

          </div>
          <div className="productInfo">
            <div className="productName">
              <span>{currentProduct.product_display_name}</span>
              <div className="actions">
                {Boolean(currentProduct.is_liked) && <Button className="transparent" type="icon"><Liked width="22px" height="22px" fill="#eb595f"/></Button>}
                {!Boolean(currentProduct.is_liked) && <Button className="transparent" type="icon"><Like width="22px" height="22px"/></Button>}
                <Button className="transparent" type="icon"><Share width="20px" height="20px" /></Button>
              </div>
            </div>
            <div className="productType">By {currentProduct.vendor_display_name} <span></span> {currentProduct.sku}</div>
            <div className="price">&#x20B9; {currentProduct.prices}  <Info width="14px" height="14px" /></div>

            <div className="productColors">
              <div className="colorHeading">
                <span className="label">Legs:</span>
                <span className="value">Coco walnut finish</span>
              </div>
              <div className="colors">
                <div className="color"><div style={{ backgroundColor: "#301304" }}></div></div>
                <div className="color"><div style={{ backgroundColor: "#b67346" }}></div></div>
              </div>
            </div>

            <div className="productColors">
              <div className="colorHeading">
                <span className="label">Upholstery:</span>
                <span className="value">Caribbean turquoise</span>
              </div>
              <div className="colors">
                <div className="color"><div style={{ backgroundColor: "#044e51" }}></div></div>
                <div className="color"><div style={{ backgroundColor: "#155f9a" }}></div></div>
              </div>
            </div>

            <div className="productColors">
              <div className="colorHeading">
                <span className="label">Dimensions WxDxH (inches)</span>
              </div>
              <div className="colors dimensions">
                <div>
                  <input type="radio" id="45x64x90" name="productDimensions" value="45x64x90" defaultChecked />
                  <label htmlFor="45x64x90">45x64x90</label>
                </div>
                <div>
                  <input type="radio" id="62x32x41" name="productDimensions" value="62x32x41" disabled />
                  <label htmlFor="62x32x41">62x32x41</label>
                </div>
                <div>
                  <input type="radio" id="90x39x38" name="productDimensions" value="90x39x38" />
                  <label htmlFor="90x39x38">90x39x38</label>
                </div>
              </div>
            </div>
          </div>
          <div className="collapsibles">
            <div className="collapsible">
              <div className="heading open">
                <span>Description</span><Button type="icon" className="transparent"><Icon type="downArrow" /></Button>
              </div>
              <div className="content">
                <p>{currentProduct.description}</p>
              </div>
            </div>
            <div className="collapsible">
              <div className="heading">
                <span>Product Information</span><Button type="icon" className="transparent"><Icon type="downArrow" /></Button>
              </div>
            </div>
            <div className="collapsible">
              <div className="heading">
                <span>Quality Promise</span><Button type="icon" className="transparent"><Icon type="downArrow" /></Button>
              </div>
            </div>
            <div className="collapsible">
              <div className="heading">
                <span>Category Notes</span><Button type="icon" className="transparent"><Icon type="downArrow" /></Button>
              </div>
            </div>
            <div className="collapsible">
              <div className="heading">
                <span>Care and Cleaning</span><Button type="icon" className="transparent"><Icon type="downArrow" /></Button>
              </div>
            </div>
          </div>
          <div className="productProducts">
            <div className="heading">
              <span>You may also consider</span>
            </div>
            <div className="productList">
            </div>
          </div>
        </div>

        <div className="detailFooter">
          <Button className="primary" clickHandler={addToCart}>Add to Cart</Button>
        </div></Fragment>}
    </div>
  );
}