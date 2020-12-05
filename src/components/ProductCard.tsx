import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ProductCard.scss";

import Button from "./Button";

import {ReactComponent as Like} from '../icons/like.svg';
import {ReactComponent as Liked} from '../icons/liked.svg';
 
interface IProductCardProps {
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

const StoreCard:React.FC<IProductCardProps> = (props: IProductCardProps) => {
  const history = useHistory();

  let handleClick = (id: number) => {
    if (history.location.pathname.indexOf("productdetail") > -1) {
      history.replace("/productdetail/"+id);
    } else {
      history.push("/productdetail/"+id);
    }
  };

 
  return (
    <div className="productCard" onClick={() => handleClick(props.product.id)}>
      <div className="productImage">
      </div>
      <div className="detail">
        <div className="productName">{props.product.product_display_name}</div>
        <div className="productType">{props.product.vendor_display_name}</div>
        <div className="productPrice">&#x20B9; {props.product.prices}</div>
        <div className="actions">
          {Boolean(props.product.is_liked) && <Button className="transparent" type="icon"><Liked  width="18px" height="18px"/></Button>}
          {!Boolean(props.product.is_liked) && <Button className="transparent" type="icon"><Like  width="18px" height="18px"/></Button>}
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;