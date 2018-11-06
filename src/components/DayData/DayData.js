import React from "react";
import "./DayData.css";

import Divider from "..//UI/Divider/Divider";

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
    <>
      <section className="DayData">
        <div className="DayData-container">
          <Divider />
          <div className="DayData-data">
            <div className="DayData-item">
              <div className="DayData-item__label">High</div>
              <div className="DayData-item__value">{high.toFixed(2)}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Price</div>
              <div className="DayData-item__value">{price.toFixed(2)}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Volume</div>
              <div className="DayData-item__value">{volume.toFixed(2)}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Low</div>
              <div className="DayData-item__value">{low.toFixed(2)}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Open</div>
              <div className="DayData-item__value">{open.toFixed(2)}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Change</div>
              <div className="DayData-item__value">{change.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DayData;
