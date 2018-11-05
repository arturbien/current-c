import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Layout from "./components/Layout/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";
import Spinner from "./components/UI/Spinner/Spinner";
import CoinDetails from "./containers/CoinDetails/CoinDetails";
import axios from "./axios";
const config = {
  coins: {
    max: 10
  }
};
class App extends Component {
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
      console.log("APP:", coins);
      this.setState({ coins, loading: false });
    } catch (err) {
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <>
            <Layout>
              <Navigation />
              {/* <Route path="/" exact component={Dashboard} /> */}
              {this.state.loading ? (
                <Spinner />
              ) : (
                <>
                  <Route path="/coin/:id" exact component={CoinDetails} />
                  <Route
                    path="/settings"
                    exact
                    component={() => <h1>Settings</h1>}
                  />
                </>
              )}
            </Layout>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
