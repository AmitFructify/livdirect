import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./ProductCard.scss";

import Button from "./Button";

import {ReactComponent as Like} from '../icons/like.svg';
import {ReactComponent as Liked} from '../icons/liked.svg';
 
interface IProductCardProps {
  updateProduct: (updateObj: {productId: number, request: any}) => void;
  product: {
    id: number;
    image: string;
    is_liked: number;
    prices: number;
    product_display_name: string;
    vendor_display_name: string;
    vendor_id: number;
  };
};

let timer:number = 0;

const StoreCard:React.FC<IProductCardProps> = (props: IProductCardProps) => {
  const history = useHistory();
  const [isLiked, setIsLiked] = useState(Boolean(props.product.is_liked));

  let handleClick = (id: number) => {
    if (history.location.pathname.indexOf("productdetail") > -1) {
      history.replace("/productdetail/"+id);
    } else {
      history.push("/productdetail/"+id);
    }
  };

  const likeProduct = () => {
    setIsLiked(!isLiked);
    
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      props.updateProduct({productId: props.product.id, request: {is_liked: !isLiked}});
    }, 300);
  }

  return (
    <div className="productCard">
      <div className="productImage" style={{ backgroundImage: `url(${props.product.image})` }} onClick={() => handleClick(props.product.id)}>
      </div>
      <div className="detail">
        <div className="productName" onClick={() => handleClick(props.product.id)}>{props.product.product_display_name}</div>
        <div className="productType">{props.product.vendor_display_name}</div>
        <div className="productPrice">&#x20B9; {props.product.prices}</div>
        <div className="actions">
          {Boolean(isLiked) && <Button className="transparent" type="icon" clickHandler={likeProduct}><Liked  width="18px" height="18px" fill="#eb595f"/></Button>}
          {!Boolean(isLiked) && <Button className="transparent" type="icon" clickHandler={likeProduct}><Like  width="18px" height="18px"/></Button>}
        </div>
      </div>
    </div>
  );
};
 
export default StoreCard;