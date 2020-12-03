import React, { ReactEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import "./StoreCard.scss";

import Button from "./Button";
import Icon from "./Icon";

interface IStoreCardProps {
  store: {
    id: number;
  };
}
 
function StoreCard(props: IStoreCardProps) {
  const history = useHistory();

  let handleClick = (id: number) => history.push("/storedetail/"+id);

  let storeActionClick = () => {
    alert(1);
  };
 
  return (
    <div className="storeCard" onClick={() => handleClick(props.store.id)}>
      <div className="storeImage">
      </div>
      <div className="detail">
        <div className="storeName">Store Name</div>
        <div className="storeType">Store Type</div>
        <div className="rating">Ratings</div>
        <div className="actions">
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Icon type="like"/></Button>
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Icon type="share"/></Button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;