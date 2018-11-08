// @flow

import * as React from "react";
import "./Layout.css";

type Props = {
  children: React$Element<any>
};

const Layout = (props: Props) => {
  return (
    <>
      <div className="Layout">{props.children}</div>
    </>
  );
};

export default Layout;
