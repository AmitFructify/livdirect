import React, { ReactEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import "./StoreCard.scss";

import Button from "./Button";

import {ReactComponent as Star} from '../icons/star.svg';
import {ReactComponent as Starred} from '../icons/starred.svg';
import {ReactComponent as Share} from '../icons/share.svg';
import {ReactComponent as Like} from '../icons/like.svg';

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
        <div className="rating">
          <Starred width="10px" height="10px"/>
          <Starred width="10px" height="10px"/>
          <Starred width="10px" height="10px"/>
          <Star width="10px" height="10px"/>
          <Star width="10px" height="10px"/>
        </div>
        <div className="actions">
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Like  width="22px" height="22px"/></Button>
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Share  width="20px" height="20px"/></Button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;