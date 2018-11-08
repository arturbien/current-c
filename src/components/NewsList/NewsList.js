import React from "react";

import "./NewsList.css";
import { Link } from "react-router-dom";
import Divider from "../../components/UI/Divider/Divider";
import NewsListItem from "./NewsListItem/NewsListItem";

const NewsList = props => {
  console.log(props.news);

  const news = props.news.map(n => {
    return (
      <li key={n.id}>
        <Link to={`/news/${n.id}`}>
          <NewsListItem data={n} />
        </Link>
        <Divider />
      </li>
    );
  });
  return <ul className="NewsList">{news}</ul>;
  // return <mark>HELLO</mark>;
};

export default NewsList;
