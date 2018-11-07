import React, { Component } from "react";
import "./CoinDetails.css";

import FullScreen from "../../hoc/fullScreen/fullScreen";
import Container from "../../hoc/container/container";
import Charts from "../../components/Charts/Charts";
import ChartsNav from "../../components/Charts/ChartsNav/ChartsNav";
import DayData from "../../components/DayData/DayData";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios";

import { getTypicalPrice, getPrice } from "../../functions";

// hourly https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24
class CoinDetails extends Component {
  state = {
    data: null,
    activeCharts: {
      LOW: true,
      HIGH: true,
      TP: true,
      DIFF: true
    },
    loading: true
  };
  componentDidMount() {
    this.fetchCoinHistory();
  }
  fetchCoinHistory = async days => {
    const coinId = this.props.match.params.id;

    let historyData = await axios.get(
      `/data/histoday?fsym=${coinId}&tsym=USD&limit=31`
    );
    historyData = historyData.data.Data;
    let data = {};
    data.TP = getTypicalPrice(historyData);
    data.HIGH = getPrice(historyData, "high");
    data.LOW = getPrice(historyData, "low");

    this.setState({ data, loading: false });
  };
  toggleChart = type => {
    const { activeCharts } = this.state;
    activeCharts[type] = !activeCharts[type];
    this.setState({ activeCharts });
  };
  render() {
    return (
      <FullScreen>
        <main className="CoinDetails">
          <Container>
            <ChartsNav
              activeCharts={this.state.activeCharts}
              toggleChart={this.toggleChart}
            />

            {this.state.loading ? (
              <Spinner />
            ) : (
              <Charts
                activeCharts={this.state.activeCharts}
                data={this.state.data}
              />
            )}
            <DayData data={this.props.coins[this.props.match.params.id].data} />
          </Container>
        </main>
      </FullScreen>
    );
  }
}

export default CoinDetails;
