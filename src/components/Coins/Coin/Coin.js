import React from "react";
import "./Coin.css";
import { NavLink } from "react-router-dom";

const Coin = props => {
  const { name, symbol, price, id, change } = props;

  return (
    <div className="Coin">
      <mark>{symbol}</mark>
      {name}
      {price}
    </div>
  );
};

export default Coin;
