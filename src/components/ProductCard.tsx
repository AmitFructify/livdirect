import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ProductCard.scss";

import Button from "./Button";
import Icon from "./Icon";
 
function StoreCard() {
  const history = useHistory();

 
  return (
    <div className="productCard">
      <div className="productImage">
      </div>
      <div className="detail">
        <div className="productName">Product Name</div>
        <div className="productType">Store Type</div>
        <div className="productPrice">&#x20B9; 1,50,000</div>
        <div className="actions">
          <Button className="transparent" type="icon"><Icon type="like"/></Button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;