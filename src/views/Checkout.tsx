import React, { useEffect } from 'react';
import "./Checkout.scss";

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

interface ICheckoutProps{
};

const Checkout: React.FC<ICheckoutProps> = (props: ICheckoutProps) => {
  const history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartProducts());
  },[dispatch]);

  const updateProductHandler = (updateObj: {productId: number, request: any}) => {
    dispatch(updateProduct(updateObj)).then(()=>{
      dispatch(fetchCartProducts());
    });
  };

  const currentCartProducts = useSelector(cartProducts);
  let totalCartValue = 0;
  const cartItems = currentCartProducts.map((cartItem: any)=> {
    totalCartValue += cartItem.prices * cartItem.cart_item_count;
    return <CartCard product={cartItem} key={cartItem.id} updateProduct={updateProductHandler}/>
  });
  let discountPerc = 12;
  let discount = Math.ceil((totalCartValue*discountPerc)/100);
  let payableAmount = totalCartValue - discount;

  const makePayment = () => {
    if (currentCartProducts.length){
      dispatch(setToaster({message: "Your Payment was Successfully<br/>Order Tracking Id is SHDFG3T7Q2N", type: "info", isOpen: true}));
      history.goBack();
      setTimeout(() => {
        dispatch(setToaster({message: "", type: "", isOpen: false}));
      },3000);
    } else {
      dispatch(setToaster({message: "Please add some items in Cart", type: "error", isOpen: true}));
      setTimeout(() => {
        dispatch(setToaster({message: "", type: "", isOpen: false}));
      },3000);
    }
  };

  return(
    <div className="checkoutWrapper">
      <div className="checkoutHeader">
        <Button className="transparent" type="icon" clickHandler={() => history.goBack()}><Close width="18px" height="18px"/></Button>
        <span>Checkout</span>
      </div>
      <div className="checkoutScroll">
        <div className="heading">Delivery Address</div>
        <div className="content address">
          <div className="name">John Doe</div>
          <p>#2, 80 Feet Road, (opp. Kormangala Indoor Stadium, Kormangala 8th Block, Bengaluru, Karnataka 560095</p>
          <div>+91 25645 75836</div>
        </div>
        <div className="heading">Order Summary</div>
        <div className="content">{cartItems}</div>
        <div className="heading">Price Detail</div>
        
        <div className="content pricingTable">
          <div className="itemsPrice">
            <div className="label">Price ({currentCartProducts.length} Items)</div>
            <div className="value">&#x20B9; {totalCartValue}</div>
          </div>
          <div className="discount">
            <div className="label">Discount</div>
            <div className="value">-&#x20B9; {discount}</div>
          </div>
          <div className="delivery">
            <div className="label">Delivery</div>
            <div className="value">Free</div>
          </div>
          <div className="payable">
            <div className="label">Amount Payable</div>
            <div className="value">&#x20B9; {payableAmount}</div>
          </div>
        </div>

        <div className="content discount">
          <div className="head">Congratulations!</div>
          <p>You got a cashback of &#x20B9; {discount} ({discountPerc}%) for shopping through a partner store.</p>
        </div>
        <div className="heading">Wallet Balance</div>
        <div className="content payment">
          <div className="paymentOption">
            <input type="radio" id="'paymentType'" name="paymentType" value="livpay" defaultChecked/>
            <label htmlFor="livpay">LivPay</label>
          </div>
          <div className="price">&#x20B9; 6,73,423</div>
        </div>
      </div>
      <div className="checkoutFooter">
        <div>
          <div className="amount">&#x20B9; {payableAmount}</div>
          <div className="priceDetailLink">View Price Details</div>
        </div>
        <Button className="primary" clickHandler={() => makePayment()}>Make Payment</Button>
      </div>
    </div>
  );
};

export default Checkout;