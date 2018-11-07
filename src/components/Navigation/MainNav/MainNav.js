import React from "react";
import Menu from "./Menu/Menu";
import SettingsButton from "./SettingsButton/SettingsButton";
import NavBar from "../../UI/NavBar/NavBar";

const MainNav = () => (
  <NavBar>
    <SettingsButton />
    <Menu />
  </NavBar>
);

export default MainNav;
