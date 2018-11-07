import React from "react";

import NavBar from "../../UI/NavBar/NavBar";
import BackButton from "../../UI/BackButton/BackButton";

const CoinNav = props => {
  const coinName = props.coins ? props.coins[props.match.params.id].name : null;
  return (
    <NavBar>
      <BackButton to="/">{coinName}</BackButton>
    </NavBar>
  );
};

export default CoinNav;
