// @flow

import React from "react";
import "./Dashboard.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import Coins from "./Coins/Coins";
import EditButton from "../UI/EditButton/EditButton";
import Notification from "../UI/Notification/Notification";

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
  console.log(props.coins);
  return (
    <main className="Dashboard">
      <Container>
        <Link to="/edit">
          <EditButton />
        </Link>
        <Heading>Dashboard</Heading>
        {Object.keys(props.coins).length ? (
          <Coins coins={props.coins} />
        ) : (
          <Notification>
            <Link to="/edit">Add some coins!</Link>
          </Notification>
        )}
      </Container>
    </main>
  );
};

export default Dashboard;
