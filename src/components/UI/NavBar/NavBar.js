import React from "react";
import "./NavBar.css";

import Container from "../../../hoc/container/container";

const NavBar = props => (
  <nav className="NavBar">
    <Container>{props.children}</Container>
  </nav>
);

export default NavBar;
