import React, { ReactEventHandler } from 'react';
import { useHistory } from 'react-router-dom';
import "./StoreCard.scss";

import Button from "./Button";

import { ReactComponent as Star } from '../icons/star.svg';
import { ReactComponent as Starred } from '../icons/starred.svg';
import { ReactComponent as Share } from '../icons/share.svg';
import { ReactComponent as Like } from '../icons/like.svg';
import { ReactComponent as Tick } from '../icons/tick.svg';

interface IStoreCardProps {
  store: {
    id: number;
    display_name: string;
    image: string;
    ratings: number;
    sample_delivery: boolean;
    store_kind: string;
    virtual_assistance: boolean;
  };
}

function StoreCard(props: IStoreCardProps) {
  const history = useHistory();

  let handleClick = (id: number) => history.push("/storedetail/" + id);

  let storeActionClick = () => {
    alert(1);
  };

  let ratings = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.store.ratings) {
      ratings.push(<Starred width="10px" height="10px" fill="#eb595f" key={props.store.display_name + i} />);
    } else {
      ratings.push(<Star width="10px" height="10px" fill="#796e76" key={props.store.display_name + i} />);
    }
  }

  return (
    <div className="storeCard" onClick={() => handleClick(props.store.id)}>
      <div className="storeImage" style={{ backgroundImage: `url(${props.store.image})` }}>
      </div>
      <div className="detail">
        <div className="storeName">{props.store.display_name}</div>
        <div className="storeType">{props.store.store_kind}</div>
        <div className="rating">
          {ratings}
        </div>

        {(props.store.sample_delivery || props.store.virtual_assistance) && <div className="indicators">
          {props.store.sample_delivery && <div className="">Sample Delivery<Tick width="12px" height="12px" fill="#44a058" /></div>
          }
          {props.store.virtual_assistance && <div className="">Virtual Assist<Tick width="12px" height="12px" fill="#44a058" /></div>
          }
        </div>}
        <div className="actions">
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Like width="22px" height="22px" /></Button>
          <Button className="transparent" type="icon" clickHandler={() => storeActionClick}><Share width="20px" height="20px" /></Button>
        </div>
      </div>
    </div>
  );
}

export default StoreCard;