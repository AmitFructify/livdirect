

import React, { useState } from 'react';
import './ProductDetail.scss';
import { useHistory } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Icon from "../components/Icon";

import Schedule from "./Schedule";
import { useDispatch } from 'react-redux';
import {
  setCartState
} from '../store/appReducer';

export default function Catalogue () {
  const history = useHistory();

  let handleBackClick = () => history.goBack();

  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({isCartOpen: true}));
  }

  return (
    <div className="productDetail">
      <div className="header">
        <Button className="secondary" type="icon" clickHandler={handleBackClick}><Icon type="back"/></Button>
        <div>
          <Button className="secondary" type="icon" clickHandler={updateCartState}><Icon type="cart"/></Button>
        </div>
      </div>
      <div className="productDetailContainer">
        <div className="detailPoster">
          
        </div>
        <div className="productInfo">
          <div className="productName">
            <span>Minnel Loveseat</span>
            <div className="actions">
              <Button className="transparent" type="icon"><Icon type="like"/></Button>
              <Button className="transparent" type="icon"><Icon type="share"/></Button>
            </div>
          </div>
          <div className="productType">By Cherry Pick Furniture <span></span> SKU:SF238783246SD</div>
          <div className="price">&#x20B9; 1,50,000 <Icon type="info" size="mini"/></div>

          <div className="productColors">
            <div className="colorHeading">
              <span className="label">Legs:</span>
              <span className="value">Coco walnut finish</span>
            </div>
            <div className="colors">
              <div className="color"><div style={{backgroundColor: "#301304"}}></div></div>
              <div className="color"><div style={{backgroundColor: "#b67346"}}></div></div>
            </div>
          </div>
          
          <div className="productColors">
            <div className="colorHeading">
              <span className="label">Upholstery:</span>
              <span className="value">Caribbean turquoise</span>
            </div>
            <div className="colors">
              <div className="color"><div style={{backgroundColor: "#044e51"}}></div></div>
              <div className="color"><div style={{backgroundColor: "#155f9a"}}></div></div>
            </div>
          </div>

          <div className="productColors">
            <div className="colorHeading">
              <span className="label">Dimensions WxDxH (inches)</span>
            </div>
            <div className="colors dimensions">
              <div>
                <input type="radio" id="45x64x90" name="productDimensions" value="45x64x90" defaultChecked/>
                <label htmlFor="45x64x90">45x64x90</label>
              </div>
              <div>
                <input type="radio" id="62x32x41" name="productDimensions" value="62x32x41" disabled/>
                <label htmlFor="62x32x41">62x32x41</label>
              </div>
              <div>
                <input type="radio" id="90x39x38" name="productDimensions" value="90x39x38"/>
                <label htmlFor="90x39x38">90x39x38</label>
              </div>
            </div>
          </div>
        </div>
        <div className="collapsibles">
          <div className="collapsible">
            <div className="heading">
              <span>Description</span><Button type="icon" className="transparent"><Icon type="downArrow"/></Button>
            </div>
            <div className="content">
              <p>Product Description</p>
            </div>
          </div>
          <div className="collapsible">
            <div className="heading">
              <span>Product Information</span><Button type="icon" className="transparent"><Icon type="downArrow"/></Button>
            </div>
          </div>
          <div className="collapsible">
            <div className="heading">
              <span>Quality Promise</span><Button type="icon" className="transparent"><Icon type="downArrow"/></Button>
            </div>
          </div>
          <div className="collapsible">
            <div className="heading">
              <span>Category Notes</span><Button type="icon" className="transparent"><Icon type="downArrow"/></Button>
            </div>
          </div>
          <div className="collapsible">
            <div className="heading">
              <span>Care and Cleaning</span><Button type="icon" className="transparent"><Icon type="downArrow"/></Button>
            </div>
          </div>
        </div>
        <div className="productProducts">
            <div className="heading">
              <span>You may also consider</span>
            </div>
            <div className="productList">
              <ProductCard product={{id: 1}}  />
              <ProductCard product={{id: 2}}  />
              <ProductCard product={{id: 3}}  />
              <ProductCard product={{id: 4}}  />
            </div>
        </div>
      </div>

      <div className="detailFooter">
        <Button className="primary">Add to Cart</Button>
      </div>
    </div>
  );
}