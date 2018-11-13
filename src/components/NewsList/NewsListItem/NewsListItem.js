import React from "react";
import "./NewsListItem.css";

const NewsListItem = props => {
  const { title, imageurl, categories } = props.data;

  return (
    <div className="NewsListItem" onClick={props.markAsRead}>
      <div className="NewsListItem-img-container">
        <img
          className="NewsListItem__img"
          src={imageurl}
          alt={categories}
          onLoad={e => (e.target.style.opacity = 1)}
        />
      </div>
      <div className="NewsListItem__title">{title}</div>
      <div className="NewsListItem__overlay" />
      <div
        className={[
          "NewsListItem__mark",
          !props.isRead ? "NewsListItem__mark--active" : ""
        ].join(" ")}
      />
    </div>
  );
};

export default NewsListItem;
