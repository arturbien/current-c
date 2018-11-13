import React from "react";

import "./NewsList.css";
import { Link } from "react-router-dom";
import Divider from "../../components/UI/Divider/Divider";
import NewsListItem from "./NewsListItem/NewsListItem";

const NewsList = props => {
  const news = props.news.map(n => {
    return (
      <li key={n.id}>
        <Link to={`/news/${n.id}`}>
          <NewsListItem
            data={n}
            isRead={props.read.includes(n.id)}
            markAsRead={() => props.markAsRead(n.id)}
          />
        </Link>
        <Divider />
      </li>
    );
  });
  return <ul className="NewsList">{news}</ul>;
  // return <mark>HELLO</mark>;
};

export default NewsList;
