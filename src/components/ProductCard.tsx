import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ProductCard.scss";

import Button from "./Button";
import Icon from "./Icon";
 
interface IProductCardProps {
  product: {
    id: number;
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
        <div className="productName">Product Name</div>
        <div className="productType">Store Type</div>
        <div className="productPrice">&#x20B9; 1,50,000</div>
        <div className="actions">
          <Button className="transparent" type="icon"><Icon type="like"/></Button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;