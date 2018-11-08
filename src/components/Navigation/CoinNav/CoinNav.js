// @flow

import React from "react";

import NavBar from "../../UI/NavBar/NavBar";
import BackButton from "../../UI/BackButton/BackButton";

type Props = {
  coins: {
    [key: string]: {
      name: string,
      symbol: string,
      id: string,
      data: {
        PRICE: string,
        CHANGEPCTDAY: number
      }
    }
  },
  match: {
    params: {
      id: string
    }
  }
};

const CoinNav = (props: Props) => {
  const coinName = props.coins ? props.coins[props.match.params.id].name : null;
  return (
    <NavBar>
      <BackButton to="/">{coinName}</BackButton>
    </NavBar>
  );
};

export default CoinNav;
