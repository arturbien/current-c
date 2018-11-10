// @flow

import React from "react";
import "./DayData.css";

import Divider from "../UI/Divider/Divider";
import Heading from "../UI/Heading/Heading";

import { Spring } from "react-spring";

type Props = {
  data: {
    HIGH24HOUR: string,
    LOW24HOUR: string,
    PRICE: string,
    OPEN24HOUR: string,
    TOTALVOLUME24H: string,
    CHANGE24HOUR: number
  }
};

const DayData = (props: Props) => {
  const { data } = props;
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
          <Heading>{price}</Heading>
          {/* <Spring from={{ number: 6378.56 / 1.2 }} to={{ number: 6378.56 }}>
            {props => <Heading>{props.number.toFixed(2)}</Heading>}
          </Spring> */}
          <Divider />
          <div className="DayData-data">
            <div className="DayData-item">
              <div className="DayData-item__label">High</div>
              <div className="DayData-item__value">{high}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Price</div>
              <div className="DayData-item__value">{price}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Volume</div>
              <div className="DayData-item__value">{volume}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Low</div>
              <div className="DayData-item__value">{low}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Open</div>
              <div className="DayData-item__value">{open}</div>
            </div>
            <div className="DayData-item">
              <div className="DayData-item__label">Change</div>
              <div className="DayData-item__value">
                {change > 0 ? "+" + change : change}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DayData;
