// @flow

import React from "react";
import "./DifferenceChart.css";

function hexToRGB(hex: string, alpha: number): string {
  const hexArray = hex.split("");
  const x = hexArray.length === 4 ? 1 : 2;
  const bHex = hexArray
    .splice(hexArray.length - x, x)
    .join("")
    .repeat(3 - x);
  const gHex = hexArray
    .splice(hexArray.length - x, x)
    .join("")
    .repeat(3 - x);
  const rHex = hexArray
    .splice(hexArray.length - x, x)
    .join("")
    .repeat(3 - x);
  const r = parseInt(rHex, 16);
  const g = parseInt(gHex, 16);
  const b = parseInt(bHex, 16);
  return `rgba(${r},${g},${b}${alpha ? "," + alpha : ""})`;
}

type Props = {
  min: number,
  max: number,
  dataLow: Array<number>,
  dataHigh: Array<number>,
  strokeWidth: string,
  stroke: string
};

const DifferenceChart = (props: Props) => {
  const { min, max, dataLow, dataHigh, strokeWidth, stroke } = props;

  const getChartDefinition = () => {
    const scale = 100 / (max - min);
    const days = dataLow.length - 1;
    const offset = 100 / days;

    let maxDifference = 0;
    dataLow.forEach((val, i) => {
      let difference = dataHigh[i] - val;
      maxDifference = difference > maxDifference ? difference : maxDifference;
    });

    let paths = [];

    dataLow.forEach((val, i) => {
      const d = `M${(offset * i).toFixed(2)},${((val - min) * scale).toFixed(
        2
      )}L${(offset * i).toFixed(2)},${((dataHigh[i] - min) * scale).toFixed(
        2
      )}`;
      const color = hexToRGB(stroke, (dataHigh[i] - val) / maxDifference);

      const path = (
        <path
          key={i}
          className="difference-chart-svg__path"
          preserveAspectRatio="none"
          vectorEffect="non-scaling-stroke"
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
        />
      );
      paths.push(path);
    });
    return paths;
  };

  return (
    <figure className="difference-chart">
      {dataLow &&
        dataHigh && (
          <svg
            className="difference-chart-svg"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {getChartDefinition()}
          </svg>
        )}
    </figure>
  );
};

export default DifferenceChart;
