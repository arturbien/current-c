// @flow
import * as React from "react";
import "./DeleteButton.css";

const DeleteButton = props => (
  <div className="DeleteButton" onClick={props.onClick}>
    <svg
      enableBackground="new 0 0 32 32"
      id="EditableLine"
      version="1.1"
      viewBox="0 0 32 32"
      className="DeleteButton__icon"
    >
      <path
        d="  M25,10H7v17c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V10z"
        fill="none"
        id="XMLID_194_"
        stroke="#6a7485"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        d="  M20,7h-8V5c0-1.105,0.895-2,2-2h4c1.105,0,2,0.895,2,2V7z"
        fill="none"
        id="XMLID_193_"
        stroke="#6a7485"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <path
        d="  M28,10H4V8c0-0.552,0.448-1,1-1h22c0.552,0,1,0.448,1,1V10z"
        fill="none"
        id="XMLID_192_"
        stroke="#6a7485"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
    </svg>
  </div>
);

export default DeleteButton;
