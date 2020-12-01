import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <span>QR</span>
          <input type="text" placeholder="Search by products or stores"/>
          <span>Cart</span>
        </div>
      );
    }
}