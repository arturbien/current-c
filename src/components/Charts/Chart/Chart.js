// @flow

import React from "react";
import "./Chart.css";

type Props = {
  min: number,
  max: number,
  data: Array<number>,
  strokeWidth: string,
  fill: string,
  stroke: string,
  blur?: string,
  strokeDasharray?: string
};

const Chart = (props: Props) => {
  const {
    min,
    max,
    data,
    blur,
    strokeDasharray,
    strokeWidth,
    fill,
    stroke
  } = props;

  const getPathDefinition = () => {
    const scale = 100 / (max - min);
    const points = data.length - 1;
    const offset = 100 / points;
    let d = "";
    data.forEach((val, i) => {
      d += `${i === 0 ? "M" : "L"}${(offset * i).toFixed(2)}${" " +
        ((val - min) * scale).toFixed(2)}`;
    });
    return d;
  };
  return (
    <figure className="Chart">
      {blur && (
        <svg
          className="Chart-svg"
          style={{ filter: `blur(${blur})` }}
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="Chart-svg__path"
            d={getPathDefinition()}
            strokeLinecap="round"
            strokeWidth="4"
            stroke={stroke || "#000"}
            strokeDasharray={strokeDasharray || "0"}
            preserveAspectRatio="none"
            vectorEffect="non-scaling-stroke"
            fill="none"
          />
        </svg>
      )}
      <svg
        className="Chart-svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="Chart-svg__path"
          d={getPathDefinition()}
          strokeLinecap="round"
          strokeWidth={strokeWidth || "1"}
          stroke={stroke || "#000"}
          strokeDasharray={strokeDasharray || "0"}
          preserveAspectRatio="none"
          vectorEffect="non-scaling-stroke"
          fill={fill || "#fff"}
        />
      </svg>
    </figure>
  );
};

export default Chart;
