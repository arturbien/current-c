import React from "react";
import "./ChartsNav.css";

const ChartsNav = ({ activeCharts, toggleChart }) => {
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
    </button>
  ));
  return <nav className="Charts-nav">{btns}</nav>;
};
export default ChartsNav;
