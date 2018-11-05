import React from "react";
import "./DifferenceChart.css";

function hexToRGB(hex, alpha) {
  hex = hex.split("");
  const x = hex.length === 4 ? 1 : 2;
  const bHex = hex
    .splice(hex.length - x, x)
    .join("")
    .repeat(3 - x);
  const gHex = hex
    .splice(hex.length - x, x)
    .join("")
    .repeat(3 - x);
  const rHex = hex
    .splice(hex.length - x, x)
    .join("")
    .repeat(3 - x);
  const r = parseInt(rHex, 16);
  const g = parseInt(gHex, 16);
  const b = parseInt(bHex, 16);
  return `rgba(${r},${g},${b}${alpha ? "," + alpha : ""})`;
}

const DifferenceChart = props => {
  console.log(props);
  const getChartDefinition = () => {
    const { min, max, dataLow, dataHigh } = props;
    const scale = 100 / (max - min);
    const days = dataLow.length - 1;
    const offset = 100 / days;
    let maxDifference = 0;
    dataLow.forEach((val, i) => {
      let difference = dataHigh[i] - val;
      maxDifference = difference > maxDifference ? difference : maxDifference;
    });
    let paths = [];

    const pathStyles = {
      strokeWidth: props.strokeWidth,
      stroke: props.stroke
    };
    dataLow.forEach((val, i) => {
      let d = `M${(offset * i).toFixed(2)},${((val - min) * scale).toFixed(
        2
      )}L${(offset * i).toFixed(2)},${((dataHigh[i] - min) * scale).toFixed(
        2
      )}`;
      pathStyles.d = d;
      pathStyles.stroke = hexToRGB(
        props.stroke,
        (dataHigh[i] - val) / maxDifference
      );
      let path = (
        <path
          key={i}
          preserveAspectRatio="none"
          vectorEffect="non-scaling-stroke"
          {...pathStyles}
          className="difference-chart-svg__path"
        />
      );
      paths.push(path);
    });
    return paths;
  };

  return (
    <figure className="difference-chart">
      {props.dataLow &&
        props.dataHigh && (
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
