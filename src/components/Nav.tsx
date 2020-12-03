import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

import Icon from "./Icon";

const Nav: React.FC = () => {
  return (
    <nav className="Navigation">
        <NavLink activeClassName="active" to="/project"><Icon type="blocks" size="large" />Project</NavLink>
        <NavLink activeClassName="active" to="/catalogue/stores"><Icon type="compas" size="large" />Discover</NavLink>
        <NavLink activeClassName="active" to="/referrals"><Icon type="users" size="large" />Referrals</NavLink>
        <NavLink activeClassName="active" to="/alerts"><Icon type="bell" size="large" />Alerts</NavLink>
        <NavLink activeClassName="active" to="/profile"><Icon type="user" size="large" />Profile</NavLink>
    </nav>
  );
}

export default Nav;