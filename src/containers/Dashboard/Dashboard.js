import React, { Component } from "react";
import "./Dashboard.css";

import Container from "../../hoc/container/container";
import Spinner from "../../components/UI/Spinner/Spinner";
import Coins from "../../components/Coins/Coins";

import axios from "../../axios";

const config = {
  coins: {
    max: 10
  }
};

class Dashboard extends Component {
  state = {
    coins: null,
    loading: true
  };
  componentDidMount() {
    this.fetchCoinsList();
  }

  fetchCoinsList = async () => {
    try {
      let coinsList = await axios.get("/data/all/coinlist");
      coinsList = coinsList.data.Data;

      const topCoins = Object.keys(coinsList)
        .sort((a, b) => coinsList[a].SortOrder - coinsList[b].SortOrder)
        .splice(0, config.coins.max);

      let coinsPrices = await axios.get(
        `/data/pricemultifull?fsyms=${topCoins.join(",")}&tsyms=USD`
      );
      coinsPrices = coinsPrices.data;

      let coins = {};
      topCoins.forEach(coin => {
        coins[coin] = {};
        coins[coin].name = coinsList[coin].CoinName;
        coins[coin].symbol = coinsPrices.DISPLAY[coin].USD.FROMSYMBOL;
        coins[coin].data = coinsPrices.RAW[coin].USD;
        coins[coin].id = coin;
      });
      console.log(coins);
      this.setState({ coins, loading: false });
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  render() {
    const coins = this.state.coins ? <Coins coins={this.state.coins} /> : null;
    return (
      <main className="Dashboard">
        <Container>
          {this.state.loading ? <Spinner /> : <h1>Dashboard</h1>}
          {coins}
        </Container>
      </main>
    );
  }
}

export default Dashboard;
