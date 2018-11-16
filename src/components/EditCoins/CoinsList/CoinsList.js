import React from "react";
import "./CoinsList.css";

import CoinsListItem from "./CoinsListItem/CoinsListItem";
import Divider from "../../UI/Divider/Divider";

// $FlowFixMe
import { Trail, Spring } from "react-spring";

const CoinsList = props => {
  let { coins, currentCoins, marked, fetchCoinsList } = props;

  coins = Object.keys(coins).map((c, i) => {
    const active = currentCoins.includes(c);
    return (
      <li key={i}>
        <CoinsListItem
          name={coins[c].FullName}
          symbol={coins[c].Symbol}
          marked={marked}
          onClick={() => {
            const newCoins = active
              ? currentCoins.filter(coin => coin !== c)
              : [...currentCoins, c];
            return fetchCoinsList(newCoins);
          }}
          active={currentCoins.includes(c)}
        />
        <Divider />
      </li>
    );
  });

  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => (
        <ul className="CoinsList" style={props}>
          {/* <Trail
        items={coins}
        keys={item => item.key}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {item => props => <li style={props}>{item}</li>}
      </Trail> */}
          {coins}
        </ul>
      )}
    </Spring>
  );
};

export default CoinsList;
