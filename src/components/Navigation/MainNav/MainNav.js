import React from "react";

import Container from "../../../hoc/container/container";
import Menu from "./Menu/Menu";
import SettingsButton from "./SettingsButton/SettingsButton";
import NavBar from "../../UI/NavBar/NavBar";
const MainNav = props => (
  <NavBar>
    <Container>
      <SettingsButton />
      <Menu />
    </Container>
  </NavBar>
);

export default MainNav;
