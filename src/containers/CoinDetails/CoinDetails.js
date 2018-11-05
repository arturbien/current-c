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
  fetchCoinHistory = async () => {
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
    console.log(data);
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
              // <Chart
              //   {...chartStyles.HIGH}
              //   minmax={this.state.data.minmax}
              //   data={this.state.data.HIGH}
              // />
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
