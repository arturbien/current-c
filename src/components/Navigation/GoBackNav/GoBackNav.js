// @flow

import React from "react";

import NavBar from "../../UI/NavBar/NavBar";
import BackButton from "../../UI/BackButton/BackButton";

const GoBackNav = props => {
  return (
    <NavBar>
      <BackButton goBack={props.history.goBack} />
    </NavBar>
  );
};

export default GoBackNav;
