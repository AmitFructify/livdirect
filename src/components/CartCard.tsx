import React from 'react';
import "./CartCard.scss";
import { useHistory } from "react-router-dom";

import Button from "./Button";

import {ReactComponent as Plus} from '../icons/plus.svg';
import {ReactComponent as Minus} from '../icons/minus.svg';
import {ReactComponent as Trash} from '../icons/trash.svg';
import {ReactComponent as Info} from '../icons/info.svg';

interface ICartCardProps{
  closeHandler?: () => void;
  updateProduct: (updateObj: {productId: number, request: any}) => void;
  product: {
    cart_item_count: number;
    color: string;
    description: string;
    dimension: string;
    id: number;
    image: string;
    in_cart: number;
    is_liked: number;
    prices: number;
    product_display_name: string;
    sku: string;
    vendor_display_name: string;
    vendor_id: number;
  };
};

const CartCard: React.FC<ICartCardProps> = (props: ICartCardProps) => {
  const history = useHistory();

  let openProductDetail = (id: number) => {
    if (props.closeHandler) {
      props.closeHandler();
    }
    if (history.location.pathname.indexOf("productdetail") > -1) {
      history.replace("/productdetail/"+id);
    } else {
      history.push("/productdetail/"+id);
    }
  };

  const increaseCartItem = () => props.updateProduct({productId: props.product.id, request: {cart_item_count: props.product.cart_item_count+1}});
  const decreaseCartItem = () => {
    let updateValue = {productId: props.product.id, request: {cart_item_count: props.product.cart_item_count, in_cart: true}};

    if (props.product.cart_item_count > 1) {
      updateValue = {productId: props.product.id, request: {cart_item_count: props.product.cart_item_count-1, in_cart: true}};
    } else {
      updateValue = {productId: props.product.id, request: {cart_item_count: 0, in_cart: false}};
    }

    props.updateProduct(updateValue);
  }

  return (
    <div className="cartCard">
      <div className="cartImage" style={{ backgroundImage: `url(${props.product.image})` }} onClick={() => openProductDetail(props.product.id)}>
      </div>
      <div className="cartDetail">
      <div className="productName" onClick={() => openProductDetail(props.product.id)}>{props.product.product_display_name}</div>
        <div className="storeName">By {props.product.vendor_display_name}</div>
        <div className="productCode">SKU: {props.product.sku}</div>
        <div className="productPrice">&#x20B9; {props.product.cart_item_count > 0?props.product.prices*props.product.cart_item_count:props.product.prices}<Info width="14px" height="14px"/></div>
        <div className="counter">
          <Button className="transparent" type="icon" clickHandler={increaseCartItem}><Plus width="14px" height="14px"/></Button>
          <span>{props.product.cart_item_count}</span>
          <Button className="transparent" type="icon" clickHandler={decreaseCartItem}><Minus width="14px" height="14px"/></Button>
        </div>
      </div>
      <Button className="transparent" type="icon" clickHandler={() => props.updateProduct({productId: props.product.id, request: {cart_item_count: 0, in_cart: false}})}><Trash width="18px" height="18px"/></Button>
    </div>
  );
}
 
export default CartCard;