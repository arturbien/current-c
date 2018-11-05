import React from "react";
import { NavLink } from "react-router-dom";

const SettingsButton = () => (
  <NavLink exact to="/settings">
    <svg
      viewBox="0 0 64 64"
      width="28px"
      height="28px"
      class="data-ex-icons-settings "
      style={{ fill: "currentcolor" }}
    >
      <g transform="translate(0,6) scale(1,1)">
        <path d="M32.2,52.32a6.24,6.24,0,0,0,12.09,0h9.56a1.56,1.56,0,0,0,0-3.12H44.29a6.24,6.24,0,0,0-12.09,0h-22a1.56,1.56,0,0,0,0,3.12ZM16.59,33.59a6.24,6.24,0,0,0,12.09,0H53.85a1.56,1.56,0,0,0,0-3.12H28.68a6.24,6.24,0,0,0-12.09,0H10.15a1.56,1.56,0,1,0,0,3.12ZM35.32,11.74H10.15a1.56,1.56,0,1,0,0,3.12H35.32a6.24,6.24,0,0,0,12.09,0h6.44a1.56,1.56,0,0,0,0-3.12H47.41a6.24,6.24,0,0,0-12.09,0Z" />
      </g>
    </svg>
  </NavLink>
);

export default SettingsButton;
