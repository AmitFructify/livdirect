import React from 'react';
import Button from './Button';
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
        <Button className="transparent" type="icon"><Icon type="close"/></Button>
      </div>
      <div className="pill">
        Sample Delivery
        <Button className="transparent" type="icon"><Icon type="close"/></Button>
      </div>
      <div className="pill">
        Virtual Assist
        <Button className="transparent" type="icon"><Icon type="close"/></Button>
      </div>
    </div>
  );
}
 
export default StoreFilter;