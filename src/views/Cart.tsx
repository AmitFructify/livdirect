import React, { useEffect } from 'react';
import "./Cart.scss";

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from "../components/Button";
import CartCard from "../components/CartCard";

import {
  setToaster
} from '../store/appReducer';
import {
  fetchCartProducts,
  cartProducts,
  updateProduct
} from '../store/catalogueReducer';

import {ReactComponent as Close} from '../icons/close.svg';

interface ICartProps{
  isOpen: boolean,
  closeHandler: () => void
};

const Cart: React.FC<ICartProps> = (props: ICartProps) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  },[dispatch]);

  const updateProductHandler = (updateObj: {productId: number, request: any}) => {
    dispatch(updateProduct(updateObj)).then(() => {
      dispatch(fetchCartProducts());
    });
  };

  const currentCartProducts = useSelector(cartProducts);
  let totalCartValue = 0;
  const cartItems = currentCartProducts.map((cartItem: any)=> {
    totalCartValue += cartItem.prices* cartItem.cart_item_count;
    return <CartCard product={cartItem} closeHandler={props.closeHandler} updateProduct={updateProductHandler} key={cartItem.id}/>
  });

  const checkout = () => {
    if(currentCartProducts.length) {
      props.closeHandler();
      history.push("/checkout");
    } else {
      dispatch(setToaster({message: "Please add some items in Cart", type: "error", isOpen: true}));
      setTimeout(() => {
        dispatch(setToaster({message: "", type: "", isOpen: false}));
      },3000);
    }
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
          <span>&#x20B9; {totalCartValue}</span>
        </div>

        <div className="cartScroll">{cartItems}</div>

        <div className="cartFooter">
          <Button className="primary" clickHandler={checkout}>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;