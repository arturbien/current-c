import React from "react";
import "./Layout.css";

const Layout = props => {
  return (
    <>
      <main className="Main">{props.children}</main>
    </>
  );
};

export default Layout;
