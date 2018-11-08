import React from "react";
import "./NewsListItem.css";

const NewsListItem = props => {
  const { title, imageurl, categories, source_info, read } = props.data;
  return (
    <div className="NewsListItem">
      <img className="NewsListItem__img" src={imageurl} alt={categories} />
      <div className="NewsListItem__title">{title}</div>
      <div className="NewsListItem__overlay" />
      <div
        className={[
          "NewsListItem__mark",
          !read ? "NewsListItem__mark--active" : ""
        ].join(" ")}
      />
    </div>
  );
};

export default NewsListItem;
