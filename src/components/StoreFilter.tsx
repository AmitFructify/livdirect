import React from 'react';
import Icon from './Icon';
import "./StoreFilter.scss";
 
function StoreFilter() {
 
  return (
    <div className="storeFilter">
      <div className="pill popup">
        <Icon type="filter"/>
        Filters
      </div>
      <div className="pill">
        Near You
      </div>
      <div className="pill">
        Sample Delivery
      </div>
      <div className="pill">
        Virtual Assist
      </div>
    </div>
  );
}
 
export default StoreFilter;