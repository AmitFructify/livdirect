import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
      return (
        <nav className="Navigation">
            <NavLink activeClassName="active" to="/">Project</NavLink>
            <NavLink activeClassName="active" to="/catalogue/stores">Discover</NavLink>
            <NavLink activeClassName="active" to="/">Referrals</NavLink>
            <NavLink activeClassName="active" to="/">Alerts</NavLink>
            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
        </nav>
      );
    }
}