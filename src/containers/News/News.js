import * as React from "react";
import "./News.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import Spinner from "../../components/UI/Spinner/Spinner";
import NewsList from "../../components/NewsList/NewsList";
import axios from "../../axios";

class News extends React.Component {
  state = {
    news: null,
    read: [],
    loading: true
  };

  componentDidMount() {
    this.fetchNews();
    console.log("NEws did mount");
  }
  fetchNews = async (sortOrder = "latest") => {
    let news = await axios.get(
      `/data/v2/news/?lang=EN&sortOrder${sortOrder}&categories=ETH`
    );
    news = news.data.Data;
    news.forEach(n => {
      n.read = false;
    });

    this.setState({ news, loading: false });
  };

  render() {
    return (
      <main className="Dashboard">
        <Container>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <>
              <Heading>News</Heading>
              <NewsList news={this.state.news} />
            </>
          )}
        </Container>
      </main>
    );
  }
}

export default News;
