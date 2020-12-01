import React from 'react';
import "./StoreFilter.scss";
 
function StoreFilter() {
 
  return (
    <div className="storeFilter">
      <div className="pill popup">
        Filters
      </div>
      <div className="pill">
        Near You
      </div>
      <div className="pill">
        Sample Delivery
      </div>
      <div className="pill">
        Virtual Assistance
      </div>
    </div>
  );
}
 
export default StoreFilter;