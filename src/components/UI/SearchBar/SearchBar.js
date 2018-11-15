import * as React from "react";
import "./SearchBar.css";

const SearchBar = props => (
  <div className="SearchBar">
    <div className="SearchBar__icon">
      <svg
        style={{ width: "30px", height: "30px" }}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
    </div>
    <input
      className="SearchBar__input"
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

export default SearchBar;
