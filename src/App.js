import React, { Component } from "react";
import "./App.css";
import "react-interactions/dist/main.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainNav from "./components/Navigation/MainNav/MainNav";
import CoinNav from "./components/Navigation/CoinNav/CoinNav";
import SettingsNav from "./components/Navigation/SettingsNav/SettingsNav";

import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import Spinner from "./components/UI/Spinner/Spinner";
import PullSpinner from "./components/UI/PullSpinner/PullSpinner";
import CoinDetails from "./containers/CoinDetails/CoinDetails";
import News from "./containers/News/News";
import axios from "./axios";

const config = {
  coins: {
    max: 10
  }
};
class App extends Component {
  state = {
    coins: null,
    news: null,
    read: [],
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
        coins[coin].data = coinsPrices.DISPLAY[coin].USD;
        coins[coin].id = coin;
      });
      this.setState({ coins, loading: false });
    } catch (err) {
      console.log("ERROR: ", err);
      this.setState({ loading: false });
    }
  };

  fetchNews = async (sortOrder = "latest") => {
    this.setState({ loading: true });

    try {
      let news = await axios.get(
        `/data/v2/news/?lang=EN&sortOrder${sortOrder}&categories=ETH`
      );
      news = news.data.Data;
      news.forEach(n => {
        n.read = false;
      });

      this.setState({ news: news.slice(0, 10), loading: false });
    } catch (err) {
      console.log("ERROR: ", err);
      this.setState({ loading: false });
    }
  };

  markAsRead = id => {
    this.setState(prevState => ({
      read: [...prevState.read, id]
    }));
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PullSpinner />
          <Layout>
            <Switch>
              <Route exact path="/settings" component={SettingsNav} />
              <Route
                path="/coin/:id"
                render={props => (
                  <CoinNav {...props} coins={this.state.coins} />
                )}
              />
              <Route path="/" component={MainNav} />
            </Switch>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <>
                <Route
                  path="/"
                  exact
                  render={() => <Dashboard coins={this.state.coins} />}
                />
                <Route
                  path="/coin/:id"
                  exact
                  render={props => (
                    <CoinDetails {...props} coins={this.state.coins} />
                  )}
                />
                <Route path="/settings" exact component={() => <Settings />} />
                <Route
                  path="/news"
                  exact
                  component={() => (
                    <News
                      news={this.state.news}
                      read={this.state.read}
                      fetch={this.fetchNews}
                      markAsRead={this.markAsRead}
                    />
                  )}
                />
              </>
            )}
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
