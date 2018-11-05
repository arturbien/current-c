import React from "react";

import "./Charts.css";
import Chart from "./Chart/Chart";
import DifferenceChart from "./DifferenceChart/DifferenceChart";

const chartStyles = {
  TP: {
    stroke: "#000",
    fill: "none",
    strokeWidth: "1",
    blur: "7px"
  },
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
  }
};

const Charts = props => {
  //MIN / MAX is required in order for price charts to be scaled proportionally
  const MIN = Math.min(...props.data.LOW);
  const MAX = Math.max(...props.data.HIGH);
  let charts = [];
  Object.keys(props.activeCharts)
    .filter(type => props.activeCharts[type])
    .forEach(type => {
      switch (type) {
        case "DIFF":
          charts.push(
            <DifferenceChart
              min={MIN}
              max={MAX}
              dataLow={props.data.LOW}
              dataHigh={props.data.HIGH}
            />
          );
          break;
        default:
          charts.push(
            <Chart
              {...chartStyles[type]}
              min={MIN}
              max={MAX}
              data={props.data[type]}
            />
          );
      }
    });

  return charts;
  // return (
  //   <Chart {...chartStyles.HIGH} min={MIN} max={MAX} data={props.data.HIGH} />
  // );
};

export default Charts;
