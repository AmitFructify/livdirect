import React, { useState } from 'react';
import "./Cart.scss";

import Button from "../components/Button";
import Icon from "../components/Icon";
import CartCard from "../components/CartCard";

interface ICartProps{
  isOpen: boolean,
  closeHandler?: () => void
};

const Cart: React.FC<ICartProps> = (props: ICartProps) => {

  return(
    <div className={`cartWrapper ${props.isOpen? "open": ""}`}>
      <div className="transHead" onClick={props.closeHandler}>
        <span></span>
      </div>

      <div className="cartContainer">
        <div className="cartHead">
          <div>
            <Button className="transparent" type="icon" clickHandler={props.closeHandler}><Icon type="close"/></Button>
            <span>Shopping Cart</span>
          </div>

          <span>&#x20B9; 56,356</span>
        </div>

        <div className="cartScroll">
          <CartCard/>
          <CartCard/>
          <CartCard/>
        </div>

        <div className="cartFooter">
          <Button className="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;