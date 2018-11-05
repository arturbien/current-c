import React from "react";
import "./Coins.css";
import { NavLink } from "react-router-dom";

import Coin from "./Coin/Coin";
import Divider from "../UI/Divider/Divider";
const Coins = props => {
  const coins = Object.keys(props.coins).map(c => {
    const coin = props.coins[c];
    return (
      <li key={coin.id}>
        <NavLink exact to={`/coin/${coin.id}`}>
          <Coin
            name={coin.name}
            symbol={coin.symbol}
            price={coin.data.PRICE}
            change={coin.data.CHANGEPCTDAY}
          />
        </NavLink>
        <Divider />
      </li>
    );
  });
  return <ul className="Coins">{coins}</ul>;
};

export default Coins;
