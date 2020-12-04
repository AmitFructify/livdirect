import React from 'react';
import Button from './Button';
import "./StoreFilter.scss";

import { useDispatch, useSelector } from 'react-redux';
import { filters, setFilters } from "../store/catalogueReducer";

import {ReactComponent as Filter} from '../icons/filter.svg';
import {ReactComponent as Close} from '../icons/close.svg';

interface IStoreFliterProps {
  clickHandler: () => void;
}
 
const StoreFilter: React.FC<IStoreFliterProps> = (props: IStoreFliterProps) => {
  const dispatch = useDispatch();

  const filterList = [...useSelector(filters)];

  const removeFilter = (filterName: string) => {
    filterList.splice(filterList.indexOf(filterName),1);
    dispatch(setFilters(filterList));
  };

  const filterItems = filterList.map((item: any) =>
    <div className="pill" key={item}>
      {item}
    <Button className="transparent" type="icon" clickHandler={() => removeFilter(item)}><Close width="14px" height="14px"/></Button>
  </div>
  );

  return (
    <div className="storeFilter">
      <div className="pill popup" onClick={props.clickHandler}>
        <Filter width="16px" height="16px"/>
        Filters
      </div>
      {filterItems}
    </div>
  );
}
 
export default StoreFilter;