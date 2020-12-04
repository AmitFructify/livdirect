import React from 'react';
import './Header.scss';

import Button from "./Button";
import {
  setCartState
} from '../store/appReducer';

import { useDispatch } from 'react-redux';

import {ReactComponent as QR} from '../icons/qr.svg';
import {ReactComponent as Cart} from '../icons/cart.svg';

interface IHeaderProps {
  qrClickHandle: () => void
};
interface IHeaderState {};

const Header:  React.FC<IHeaderProps> = (props: IHeaderProps) => {
  const dispatch = useDispatch();
  const updateCartState = () => {
    dispatch(setCartState({isCartOpen: true}));
  }
  return (
    <div className="Header">
      <input type="text" placeholder="Search by products or stores"/>
      <Button type="icon" className="transparent" clickHandler={props.qrClickHandle}><QR width="22px" height="22px"/></Button>
      <Button type="icon" className="transparent" clickHandler={updateCartState}><Cart width="22px" height="22px"/></Button>
    </div>
  );
}

export default Header;