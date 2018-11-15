import * as React from "react";
import "./News.css";

import Container from "../../hoc/container/container";
import Heading from "../../components/UI/Heading/Heading";
import NewsList from "../../components/NewsList/NewsList";

const News = props => {
  if (!props.news) {
    props.fetch();
    return null;
  }
  return (
    <main className="Dashboard">
      <Container>
        <Heading>News</Heading>
        <NewsList
          markAsRead={props.markAsRead}
          read={props.read}
          news={props.news}
        />
      </Container>
    </main>
  );
};

export default News;
