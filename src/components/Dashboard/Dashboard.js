// @flow

import React from "react";
import "./Dashboard.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import Coins from "./Coins/Coins";
import EditButton from "../UI/EditButton/EditButton";

import { Link } from "react-router-dom";
type Props = {
  coins: {
    [key: string]: {
      name: string,
      symbol: string,
      id: string,
      data: {
        PRICE: string,
        CHANGEPCTDAY: number
      }
    }
  }
};

const Dashboard = (props: Props) => {
  return (
    <main className="Dashboard">
      <Container>
        <Link to="/edit">
          <EditButton />
        </Link>
        <Heading>Dashboard</Heading>
        <Coins coins={props.coins} />
      </Container>
    </main>
  );
};

export default Dashboard;
