import React, { Component } from "react";
import "./CoinDetails.css";

import FullScreen from "../../hoc/fullScreen/fullScreen";
import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
// import Chart from "../../components/Charts/Chart/Chart";
import Charts from "../../components/Charts/Charts";
import Spinner from "../../components/UI/Spinner/Spinner";

import axios from "../../axios";

import { getTypicalPrice, getPrice } from "../../functions";

// hourly https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24
class CoinDetails extends Component {
  state = {
    data: null,
    activeCharts: {
      LOW: false,
      HIGH: false,
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
      `/data/histoday?fsym=${coinId}&tsym=USD&limit=365`
    );
    historyData = historyData.data.Data;
    let data = {};
    data.TP = getTypicalPrice(historyData);
    data.HIGH = getPrice(historyData, "high");
    data.LOW = getPrice(historyData, "low");

    let info = await axios.get(
      `/data/pricemultifull?fsyms=${coinId}&tsyms=USD`
    );
    info = info.data;
    let today = {
      high: info.RAW[coinId].USD.HIGH24HOUR,
      low: info.RAW[coinId].USD.LOW24HOUR,
      volume: info.RAW[coinId].USD.LOW24HOUR,
      change: {
        pct: info.RAW[coinId].USD.CHANGEPCT24HOUR,
        val: info.RAW[coinId].USD.CHANGE24HOUR
      }
    };
    console.log(info);

    this.setState({ data, loading: false });
  };

  render() {
    console.log(this.props);
    return (
      <FullScreen>
        <main className="CoinDetails">
          <Container>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <Charts
                activeCharts={this.state.activeCharts}
                data={this.state.data}
              />
            )}
          </Container>
        </main>
      </FullScreen>
    );
  }
}

export default CoinDetails;
