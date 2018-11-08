import React from "react";
import "./Menu.css";

import { NavLink } from "react-router-dom";

const Menu = () => (
  <ul className="Menu">
    <li>
      <NavLink exact to="/">
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink to="/news">News</NavLink>
    </li>
  </ul>
);

export default Menu;
