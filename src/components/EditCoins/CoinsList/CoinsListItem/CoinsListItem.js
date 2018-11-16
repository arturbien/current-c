// @flow

import React from "react";
import "./CoinsListItem.css";

import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
import AddButton from "../../../UI/AddButton/AddButton";

function occurenceIndexes(source, find) {
  var result = [];
  for (let i = 0; i < source.length; ++i) {
    // If you want to search case insensitive use
    // if (source.substring(i, i + find.length).toLowerCase() == find) {
    if (
      source.toLowerCase().substring(i, i + find.length) === find.toLowerCase()
    ) {
      result.push(i);
    }
  }
  return result;
}
function splitByIndex(str, word, indexes) {
  let arr = [];
  if (indexes[0] !== 0) {
    arr.push(str.substring(0, indexes[0]));
  }
  for (let i = 0; i < indexes.length; i++) {
    arr.push(str.substring(indexes[i], indexes[i] + word.length));
    arr.push(str.substring(indexes[i] + word.length, indexes[i + 1]));
  }
  return arr;
}
const CoinsListItem = props => {
  let { name, symbol, marked, active } = props;

  let indexes = occurenceIndexes(name, marked);
  name = splitByIndex(name, marked, indexes).map(s =>
    s.toLowerCase() === marked.toLowerCase() ? (
      <mark className="CoinsListItem__mark">{s}</mark>
    ) : (
      s
    )
  );
  return (
    <div className="CoinsListItem">
      <div className="CoinsListItem__symbol">
        <i>{symbol}</i>
      </div>
      <div className="CoinsListItem__name">{name}</div>
      <div className="CoinsListItem__button">
        {active ? (
          <DeleteButton onClick={props.onClick} />
        ) : (
          <AddButton onClick={props.onClick} />
        )}
      </div>
    </div>
  );
};

export default CoinsListItem;
