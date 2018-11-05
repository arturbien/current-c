import React from "react";
import "./Chart.css";

const Chart = props => {
  const getPathDefinition = () => {
    const { min, max, data } = props;
    const scale = 100 / (max - min);
    const points = data.length - 1;
    const offset = 100 / points;
    let d = "M0 0";
    data.forEach((val, i) => {
      d += `L${(offset * i).toFixed(2)}${" " +
        ((val - min) * scale).toFixed(2)}`;
    });
    d += " L100 0";
    return d;
  };
  return (
    <figure className="Chart">
      {props.blur && (
        <svg
          className="Chart-svg"
          style={{ filter: `blur(${props.blur})` }}
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
            stroke={props.stroke || "#000"}
            strokeDasharray={props.strokeDasharray || "0"}
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
          strokeWidth={props.strokeWidth || "1"}
          stroke={props.stroke || "#000"}
          strokeDasharray={props.strokeDasharray || "0"}
          preserveAspectRatio="none"
          vectorEffect="non-scaling-stroke"
          fill={props.fill || "#fff"}
        />
      </svg>
    </figure>
  );
};
export default Chart;
