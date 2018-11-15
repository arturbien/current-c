// @flow

import React, { Component } from "react";
import "./EditCoins.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import CoinsList from "./CoinsList/CoinsList";

class EditCoins extends Component {
  state = {
    searchValue: ""
  };
  handleInputChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    let currentCoins = Object.keys(this.props.coins);
    console.log(currentCoins);
    let coins = {};
    if (this.state.searchValue) {
      let counter = 0;
      for (let coin in this.props.coinsList) {
        if (
          this.props.coinsList[coin].FullName.toLowerCase().includes(
            this.state.searchValue.toLowerCase()
          )
        ) {
          coins[coin] = this.props.coinsList[coin];
          counter++;
        }
        if (counter >= 10) {
          break;
        }
      }
    } else {
      for (let coin in this.props.coins) {
        coins[coin] = this.props.coinsList[coin];
      }
    }
    console.log(coins);
    return (
      <main className="EditCoins">
        <Container>
          <SearchBar
            onChange={this.handleInputChange}
            value={this.state.searchValue}
            placeholder={"Search for coin..."}
          />

          <CoinsList
            coins={coins}
            marked={this.state.searchValue}
            fetchCoinsList={this.props.fetchCoinsList}
            currentCoins={currentCoins}
          />
        </Container>
      </main>
    );
  }
}

export default EditCoins;
