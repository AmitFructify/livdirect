import React from 'react';
import "./Cart.scss";

import { useHistory } from 'react-router-dom';

import Button from "../components/Button";
import CartCard from "../components/CartCard";

import {ReactComponent as Close} from '../icons/close.svg';

interface ICartProps{
  isOpen: boolean,
  closeHandler: () => void
};

const Cart: React.FC<ICartProps> = (props: ICartProps) => {
  const history = useHistory();

  const checkout = () => {
    props.closeHandler();
    history.push("/checkout");
  };

  return(
    <div className={`cartWrapper ${props.isOpen? "open": ""}`}>
      <div className="transHead" onClick={props.closeHandler}>
        <span></span>
      </div>

      <div className="cartContainer">
        <div className="cartHead">
          <div>
            <Button className="transparent" type="icon" clickHandler={props.closeHandler}><Close width="18px" height="18px"/></Button>
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
          <Button className="primary" clickHandler={checkout}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;