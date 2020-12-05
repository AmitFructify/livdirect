import React from 'react';
import "./CartCard.scss";

import Button from "./Button";

import {ReactComponent as Plus} from '../icons/plus.svg';
import {ReactComponent as Minus} from '../icons/minus.svg';
import {ReactComponent as Trash} from '../icons/trash.svg';
import {ReactComponent as Info} from '../icons/info.svg';
 
function CartCard() {
 
  return (
    <div className="cartCard">
      <div className="cartImage">
      </div>
      <div className="cartDetail">
        <div className="productName">Product Name</div>
        <div className="storeName">By Store Name</div>
        <div className="productCode">SKU: SHDJ45735FH2837T</div>
        <div className="productPrice">&#x20B9; 1,50,000 <Info width="14px" height="14px"/></div>
        <div className="counter">
          <Button className="transparent" type="icon"><Plus width="14px" height="14px"/></Button>
          <span>1</span>
          <Button className="transparent" type="icon"><Minus width="14px" height="14px"/></Button>
        </div>
      </div>
      <Button className="transparent" type="icon"><Trash width="16px" height="16px"/></Button>
    </div>
  );
}
 
export default CartCard;