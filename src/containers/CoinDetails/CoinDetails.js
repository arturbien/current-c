// @flow

import * as React from "react";
import "./CoinDetails.css";

import FullScreen from "../../hoc/fullScreen/fullScreen";
import Container from "../../hoc/container/container";
import Charts from "../../components/Charts/Charts";
import ChartsNav from "../../components/Charts/ChartsNav/ChartsNav";
import DayData from "../../components/DayData/DayData";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios";

import { getTypicalPrice, getPrice } from "../../functions";

type Props = {
  coins: {
    [key: string]: {
      data: {
        HIGH24HOUR: string,
        LOW24HOUR: string,
        PRICE: string,
        OPEN24HOUR: string,
        TOTALVOLUME24H: string,
        CHANGE24HOUR: number
      }
    }
  },
  match: {
    params: {
      id: string
    }
  }
};
// Flow throws some errors when checking for Object type in state.data, hence the ugly "any"

type State = {
  data: any,
  activeCharts: {
    LOW: boolean,
    HIGH: boolean,
    TP: boolean,
    DIFF: boolean
  },
  loading: boolean
};

class CoinDetails extends React.Component<Props, State> {
  state = {
    data: null,
    activeCharts: {
      LOW: false,
      HIGH: false,
      TP: false,
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
  };
  toggleChart = (type: "LOW" | "HIGH" | "DIFF" | "TP") => {
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
