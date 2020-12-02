import React from 'react';
import './Header.scss';

import Button from "./Button";
import Icon from "./Icon";

interface IHeaderProps {
  qrClickHandle: () => void
};
interface IHeaderState {};

const Header:  React.FC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <div className="Header">
      <input type="text" placeholder="Search by products or stores"/>
      <Button type="icon" className="transparent" clickHandler={props.qrClickHandle}><Icon type="qr" /></Button>
      <Button type="icon" className="transparent"><Icon type="cart" /></Button>
    </div>
  );
}

export default Header;