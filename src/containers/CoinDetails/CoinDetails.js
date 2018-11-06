import React, { Component } from "react";
import "./CoinDetails.css";

import FullScreen from "../../hoc/fullScreen/fullScreen";
import Container from "../../hoc/container/container";
import Charts from "../../components/Charts/Charts";
import DayData from "../../components/DayData/DayData";
import Spinner from "../../components/UI/Spinner/Spinner";
import Heading from "../../components/UI/Heading/Heading";
import Divider from "../../components/UI/Divider/Divider";
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

    // let info = await axios.get(
    //   `/data/pricemultifull?fsyms=${coinId}&tsyms=USD`
    // );
    // info = info.data;
    // let today = {
    //   high: info.RAW[coinId].USD.HIGH24HOUR,
    //   low: info.RAW[coinId].USD.LOW24HOUR,
    //   volume: info.RAW[coinId].USD.LOW24HOUR,
    //   change: {
    //     pct: info.RAW[coinId].USD.CHANGEPCT24HOUR,
    //     val: info.RAW[coinId].USD.CHANGE24HOUR
    //   }
    // };

    this.setState({ data, loading: false });
  };

  render() {
    // console.log(this.state, this.props.coins[this.props.match.params.id].data);

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
            <Heading>
              {this.props.coins[this.props.match.params.id].name}
            </Heading>
            <Divider />
            <DayData data={this.props.coins[this.props.match.params.id].data} />
          </Container>
        </main>
      </FullScreen>
    );
  }
}

export default CoinDetails;
