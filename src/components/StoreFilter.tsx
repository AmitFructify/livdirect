import React from 'react';
import Button from './Button';
import Icon from './Icon';
import "./StoreFilter.scss";

import { useDispatch, useSelector } from 'react-redux';
import { filters, setFilters } from "../store/catalogueReducer";

interface IStoreFliterProps {
  clickHandler: () => void;
}
 
const StoreFilter: React.FC<IStoreFliterProps> = (props: IStoreFliterProps) => {

  const filterList = [...useSelector(filters)];

  const filterItems = filterList.map((item: any) =>
    <div className="pill" key={item}>
      {item}
    <Button className="transparent" type="icon"><Icon type="close"/></Button>
  </div>
  );

  return (
    <div className="storeFilter">
      <div className="pill popup" onClick={props.clickHandler}>
        <Icon type="filter"/>
        Filters
      </div>
      {filterItems}
    </div>
  );
}
 
export default StoreFilter;