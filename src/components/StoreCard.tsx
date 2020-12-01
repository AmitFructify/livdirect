import React from 'react';
import { Switch } from 'react-router-dom';
import "./StoreCard.scss";
 
function StoreCard() {
  const greeting = 'Hello Function Component!';
 
  return (
    <div className="storeCard">
      <div className="storeImage">
        Image
      </div>
      <div className="detail">
        <div className="storeName">Store Name</div>
        <div className="storeType">Store Type</div>
        <div className="rating">Ratings</div>
        <div className="actions">
          <button>wish</button>
          <button>share</button>
        </div>
      </div>
    </div>
  );
}
 
export default StoreCard;