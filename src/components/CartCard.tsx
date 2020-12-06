import React from 'react';
import "./CartCard.scss";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import Button from "./Button";

import {ReactComponent as Plus} from '../icons/plus.svg';
import {ReactComponent as Minus} from '../icons/minus.svg';
import {ReactComponent as Trash} from '../icons/trash.svg';
import {ReactComponent as Info} from '../icons/info.svg';

import {
  updateProduct
} from '../store/catalogueReducer';
 
interface ICartCardProps{
  closeHandler?: () => void
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
  const dispatch = useDispatch();

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

  const deleteFromCart = () => dispatch(updateProduct({productId: props.product.id, request: {in_cart: false}}));
 
  return (
    <div className="cartCard">
      <div className="cartImage" style={{ backgroundImage: `url(${props.product.image})` }} onClick={() => openProductDetail(props.product.id)}>
      </div>
      <div className="cartDetail">
      <div className="productName" onClick={() => openProductDetail(props.product.id)}>{props.product.product_display_name}</div>
        <div className="storeName">By {props.product.vendor_display_name}</div>
        <div className="productCode">SKU: {props.product.sku}</div>
        <div className="productPrice">&#x20B9; {props.product.prices * props.product.cart_item_count}<Info width="14px" height="14px"/></div>
        <div className="counter">
          <Button className="transparent" type="icon"><Plus width="14px" height="14px"/></Button>
          <span>{props.product.cart_item_count}</span>
          <Button className="transparent" type="icon"><Minus width="14px" height="14px"/></Button>
        </div>
      </div>
      <Button className="transparent" type="icon" clickHandler={deleteFromCart}><Trash width="16px" height="16px"/></Button>
    </div>
  );
}
 
export default CartCard;