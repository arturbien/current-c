import React from "react";
import "./Menu.css";

import { NavLink } from "react-router-dom";

const Menu = props => (
  <ul className="Menu">
    <li>
      <NavLink exact to="/">
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink to="/blog">Blog</NavLink>
    </li>
  </ul>
);

export default Menu;
