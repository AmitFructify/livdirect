import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";
import {ReactComponent as Compas} from '../icons/compas.svg';
import {ReactComponent as Blocks} from '../icons/blocks.svg';
import {ReactComponent as Users} from '../icons/users.svg';
import {ReactComponent as Bell} from '../icons/bell.svg';
import {ReactComponent as User} from '../icons/user.svg';

const Nav: React.FC = () => {
  return (
    <nav className="Navigation">
        <NavLink activeClassName="active" to="/project"><Blocks height="22px" width="22px"/>Project</NavLink>
        <NavLink activeClassName="active" to="/catalogue/stores"><Compas height="22px" width="22px" fill="#eb595f"/>Discover</NavLink>
        <NavLink activeClassName="active" to="/referrals"><Users height="22px" width="22px"/>Referrals</NavLink>
        <NavLink activeClassName="active" to="/alerts"><Bell height="22px" width="22px"/>Alerts</NavLink>
        <NavLink activeClassName="active" to="/profile"><User height="22px" width="22px"/>Profile</NavLink>
    </nav>
  );
}

export default Nav;