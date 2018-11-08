// @flow

import * as React from "react";
import "./NavBar.css";

import Container from "../../../hoc/container/container";

type Props = {
  children: React$Element<any>
};

const NavBar = (props: Props) => (
  <nav className="NavBar">
    <Container>{props.children}</Container>
  </nav>
);

export default NavBar;
