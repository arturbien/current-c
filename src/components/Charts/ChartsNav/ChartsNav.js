// @flow

import React from "react";
import "./ChartsNav.css";
import Tap from "react-interactions";

type Props = {
  activeCharts: {
    LOW: boolean,
    HIGH: boolean,
    TP: boolean,
    DIFF: boolean
  },
  toggleChart: (type: "LOW" | "HIGH" | "TP" | "DIFF") => void
};

const ChartsNav = (props: Props) => {
  const { activeCharts, toggleChart } = props;

  const btns = Object.keys(activeCharts).map(type => (
    <button
      key={type}
      className={[
        "Charts-nav__button",
        activeCharts[type] ? "Charts-nav__button--active" : ""
      ].join(" ")}
      onClick={() => toggleChart(type)}
    >
      {type}
      <Tap fade waves light />
    </button>
  ));
  return <nav className="Charts-nav">{btns}</nav>;
};
export default ChartsNav;
