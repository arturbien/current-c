import React from "react";
import "./Navigation.css";

import Container from "../../hoc/container/container";
import Menu from "./Menu/Menu";
import SettingsButton from "./SettingsButton/SettingsButton";

const Navigation = props => (
  <nav className="Navigation">
    <Container>
      <SettingsButton />
      <Menu />
    </Container>
  </nav>
);

export default Navigation;
