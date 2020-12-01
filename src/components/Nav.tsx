import React from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
      return (
        <nav className="Navigation">
            <Link to="/">Home</Link>
            <Link to="/catalogue">Products</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
        </nav>
      );
    }
}