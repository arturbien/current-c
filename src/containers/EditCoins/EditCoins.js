// @flow

import React, { Component } from "react";
import "./EditCoins.css";

import Container from "../../hoc/container/container";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import EditCoinsList from "../../components/EditCoinsList/EditCoinsList";
import Notification from "../../components/UI/Notification/Notification";

class EditCoins extends Component {
  state = {
    searchValue: ""
  };
  handleInputChange = e => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    let currentCoins = Object.keys(this.props.coins);
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
    console.log(currentCoins);

    return (
      <main className="EditCoins">
        <Container>
          {/* <Heading>Manage coins</Heading> */}
          <SearchBar
            onChange={this.handleInputChange}
            value={this.state.searchValue}
            placeholder={"Search for coin..."}
          />

          {currentCoins.length || this.state.searchValue ? (
            <EditCoinsList
              coins={coins}
              marked={this.state.searchValue}
              fetchCoinsList={this.props.fetchCoinsList}
              currentCoins={currentCoins}
            />
          ) : (
            <Notification>Add some coins!</Notification>
          )}
        </Container>
      </main>
    );
  }
}

export default EditCoins;
