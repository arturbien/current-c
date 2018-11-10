import React from "react";
import "./Menu.css";

import { NavLink } from "react-router-dom";

import Tap from "react-interactions";

const Menu = () => (
  <ul className="Menu">
    <li>
      <NavLink exact to="/">
        Dashboard
        <Tap fade waves light />
      </NavLink>
    </li>
    <li>
      <NavLink to="/news">
        News
        <Tap fade waves light />
      </NavLink>
    </li>
  </ul>
);

export default Menu;
