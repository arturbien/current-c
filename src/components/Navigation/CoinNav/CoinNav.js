import React from "react";

import Container from "../../../hoc/container/container";
import NavBar from "../../UI/NavBar/NavBar";
import BackButton from "../../UI/BackButton/BackButton";

const CoinNav = props => {
  const coinName = props.coins ? props.coins[props.match.params.id].name : null;
  return (
    <NavBar>
      <Container>
        <BackButton to="/">{coinName}</BackButton>
      </Container>
    </NavBar>
  );
};

export default CoinNav;
