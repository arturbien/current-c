// @flow

import React from "react";
import "./Coins.css";
// $FlowFixMe
import { Link } from "react-router-dom";

import Coin from "./Coin/Coin";
import Divider from "../../UI/Divider/Divider";

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
  }
};
const Coins = (props: Props) => {
  const coins = Object.keys(props.coins).map(c => {
    const coin = props.coins[c];
    return (
      <li key={coin.id}>
        <Link to={`/coin/${coin.id}`}>
          <Coin
            name={coin.name}
            symbol={coin.symbol}
            price={coin.data.PRICE}
            change={coin.data.CHANGEPCTDAY}
          />
        </Link>
        <Divider />
      </li>
    );
  });
  return <ul className="Coins">{coins}</ul>;
};

export default Coins;
