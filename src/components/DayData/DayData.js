import React from "react";
import "./DayData.css";

const DayData = ({ data }) => {
  console.log(data);
  const {
    HIGH24HOUR: high,
    LOW24HOUR: low,
    PRICE: price,
    OPEN24HOUR: open,
    TOTALVOLUME24H: volume,
    CHANGE24HOUR: change
  } = data;
  return (
    <section className="DayData">
      <div className="DayData-data">
        <div className="DayData-data__label">High</div>
        <div className="DayData-data__value">{high.toFixed(2)}</div>
      </div>
      <div className="DayData-data">
        <div className="DayData-data__label">Price</div>
        <div className="DayData-data__value">{price.toFixed(2)}</div>
      </div>
      <div className="DayData-data">
        <div className="DayData-data__label">Volume</div>
        <div className="DayData-data__value">{volume.toFixed(2)}</div>
      </div>
      <div className="DayData-data">
        <div className="DayData-data__label">Low</div>
        <div className="DayData-data__value">{low.toFixed(2)}</div>
      </div>
      <div className="DayData-data">
        <div className="DayData-data__label">Open</div>
        <div className="DayData-data__value">{open.toFixed(2)}</div>
      </div>
      <div className="DayData-data">
        <div className="DayData-data__label">Change</div>
        <div className="DayData-data__value">{change.toFixed(2)}</div>
      </div>
    </section>
  );
};

export default DayData;
