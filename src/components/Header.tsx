import React from 'react';
import './Header.scss';

import Button from "./Button";
import Icon from "./Icon";

export default class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <input type="text" placeholder="Search by products or stores"/>
          <Button type="icon" className="transparent"><Icon type="qr" /></Button>
          <Button type="icon" className="transparent"><Icon type="cart" /></Button>
        </div>
      );
    }
}