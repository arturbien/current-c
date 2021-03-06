// @flow

import React from "react";

import "./Charts.css";
import Chart from "./Chart/Chart";
import DifferenceChart from "./DifferenceChart/DifferenceChart";

const chartStyles = {
  HIGH: {
    stroke: "#5cab7d",
    fill: "none",
    strokeDasharray: "8,16",
    strokeWidth: "2"
  },

  LOW: {
    stroke: "#ED254E",
    fill: "none",
    strokeDasharray: "8,16",
    strokeWidth: "2"
  },
  DIFF: {
    strokeWidth: "8px",
    stroke: "#6a7485"
  },
  TP: {
    stroke: "#fff",
    fill: "none",
    strokeWidth: "1",
    blur: "7px"
  }
};

type Props = {
  data: {
    LOW: Array<number>,
    HIGH: Array<number>,
    TP: Array<number>
  },
  activeCharts: {
    LOW: boolean,
    HIGH: boolean,
    TP: boolean,
    DIFF: boolean
  }
};

const Charts = (props: Props) => {
  //MIN / MAX is required in order for price charts to be scaled proportionally
  const MIN = Math.min(...props.data.LOW);
  const MAX = Math.max(...props.data.HIGH);
  let charts = [];
  Object.keys(props.activeCharts)
    .filter(type => props.activeCharts[type])
    .forEach((type, i) => {
      switch (type) {
        case "DIFF":
          charts.push(
            <DifferenceChart
              key={i}
              min={MIN}
              max={MAX}
              dataLow={props.data.LOW}
              dataHigh={props.data.HIGH}
              {...chartStyles[type]}
            />
          );
          break;
        default:
          charts.push(
            <Chart
              key={i}
              min={MIN}
              max={MAX}
              data={props.data[type]}
              {...chartStyles[type]}
            />
          );
      }
    });

  return (
    <>
      {/* <ChartsNav activeCharts={props.activeCharts} toggle={props.toggle} /> */}
      <section className="Charts">{charts}</section>
    </>
  );
};

export default Charts;
