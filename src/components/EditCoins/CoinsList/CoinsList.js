import React from "react";
import "./CoinsList.css";

import CoinsListItem from "./CoinsListItem/CoinsListItem";
import Divider from "../../UI/Divider/Divider";

// $FlowFixMe
import { Trail } from "react-spring";

const CoinsList = props => {
  let { coins, currentCoins, marked, fetchCoinsList } = props;

  console.log("SWAG", Object.keys(coins));

  coins = Object.keys(coins).map((c, i) => {
    return (
      <div key={i}>
        <CoinsListItem
          name={coins[c].FullName}
          symbol={coins[c].Symbol}
          marked={marked}
          onClick={() => {
            return fetchCoinsList([...currentCoins, c]);
          }}
        />
        <Divider />
      </div>
    );
  });

  return (
    <ul className="CoinsList">
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

export default CoinsList;
