import React, { ReactEventHandler, SyntheticEvent } from 'react';
import './Header.scss';

import Button from "./Button";
import {
  setCartState
} from '../store/appReducer';
import {
  searchString,
  setSearchString
} from '../store/catalogueReducer';

import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as QR } from '../icons/qr.svg';
import { ReactComponent as Cart } from '../icons/cart.svg';

interface IHeaderProps {
  qrClickHandle: () => void
};
interface IHeaderState { };

const Header: React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({ isCartOpen: true }));
  }

  let handleChange = (e: any) => {
    dispatch(setSearchString(e.currentTarget.value));
  }

  return (
    <div className="Header">
      <input type="text" placeholder="Search by products or stores" value={useSelector(searchString)} onChange={(e) => handleChange(e)} />
      <Button type="icon" className="transparent" clickHandler={props.qrClickHandle}><QR width="22px" height="22px" /></Button>
      <Button type="icon" className="transparent" clickHandler={updateCartState}><Cart width="22px" height="22px" /></Button>
    </div>
  );
}

export default Header;