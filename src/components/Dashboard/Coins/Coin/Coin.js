import React from "react";
import "./Coin.css";

const Coin = props => {
  const { name, symbol, price, change } = props;
  const changeDropClass = change < 0 ? "Coin-stats__change--drop" : "";

  return (
    <div className="Coin">
      <div className="Coin__symbol">
        <i>{symbol}</i>
      </div>
      <div className="Coin__name">{name}</div>
      <div className="Coin-stats">
        <div className="Coin-stats__price">{price}</div>
        <div className={["Coin-stats__change", changeDropClass].join(" ")}>
          {change > 0 ? "+" + change : change}
        </div>
      </div>
    </div>
  );
};

export default Coin;
