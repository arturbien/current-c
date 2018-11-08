// @flow
import * as React from "react";
import "./Heading.css";

type Props = {
  children: string
};
const Heading = (props: Props) => <h3 className="Heading">{props.children}</h3>;

export default Heading;
