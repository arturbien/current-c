// @flow

import React from "react";
import "./Coins.css";

import Coin from "./Coin/Coin";
import Divider from "../../UI/Divider/Divider";

// $FlowFixMe
import { Link } from "react-router-dom";
import { Trail } from "react-spring";

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
    console.log(coin.name, coin.id);

    return (
      <div key={coin.id}>
        <Link to={`/coin/${coin.id}`} key={coin.id}>
          <Coin
            name={coin.name}
            symbol={coin.symbol}
            price={coin.data.PRICE}
            change={coin.data.CHANGEPCTDAY}
          />
        </Link>
        <Divider />
      </div>
    );
  });
  console.log(coins);

  let swag = [1, 2, 3, 4, 5, 6];
  return (
    <ul className="Coins">
      {/* {coins} */}
      <Trail
        items={coins}
        keys={item => item.key}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {item => props => <li style={props}>{item}</li>}
      </Trail>
    </ul>
  );
};

export default Coins;
