import React from 'react';
import { useHistory } from 'react-router-dom';
import "./CartCard.scss";

import Button from "./Button";
import Icon from "./Icon";
 
function CartCard() {
  const history = useHistory();

  let handleClick = () => history.push("/profile");
 
  return (
    <div className="cartCard">
      <div className="cartImage">
      </div>
      <div className="cartDetail">
        <div className="productName">Product Name</div>
        <div className="storeName">By Store Name</div>
        <div className="productCode">SKU: SHDJ45735FH2837T</div>
        <div className="productPrice">&#x20B9; 1,50,000 <Icon type="info" size="mini"/></div>
        <div className="counter">
          <Button className="transparent" type="icon"><Icon type="minus"/></Button>
          <span>1</span>
          <Button className="transparent" type="icon"><Icon type="plus"/></Button>
        </div>
      </div>
      <Button className="transparent" type="icon"><Icon type="delete"/></Button>
    </div>
  );
}
 
export default CartCard;