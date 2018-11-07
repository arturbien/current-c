import React from "react";

import Container from "../../../hoc/container/container";
import Menu from "./Menu/Menu";
import SettingsButton from "./SettingsButton/SettingsButton";
import NavBar from "../../UI/NavBar/NavBar";
const MainNav = props => (
  <NavBar>
    <SettingsButton />
    <Menu />
  </NavBar>
);

export default MainNav;
