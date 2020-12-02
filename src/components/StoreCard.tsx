import React, { ReactEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import "./StoreCard.scss";

import Button from "./Button";
import Icon from "./Icon";
 
function StoreCard() {
  const history = useHistory();

  let handleClick= () => history.push("/profile");

  let storeActionClick = () => {
    alert(1);
  };
 
  return (
    <div className="storeCard" onClick={handleClick}>
      <div className="storeImage">
      </div>
      <div className="detail">
        <div className="storeName">Store Name</div>
        <div className="storeType">Store Type</div>
        <div className="rating">Ratings</div>
        <div className="actions">
          <Button className="transparent" type="icon" clickHandler={storeActionClick}><Icon type="like"/></Button>
          <Button className="transparent" type="icon" clickHandler={storeActionClick}><Icon type="share"/></Button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;