import React from "react";
import "./Dashboard.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import Coins from "./Coins/Coins";

const Dashboard = props => {
  return (
    <main className="Dashboard">
      <Container>
        <Heading>Dashboard</Heading>
        <Coins coins={props.coins} />
      </Container>
    </main>
  );
};

export default Dashboard;
