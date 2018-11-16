// @flow

import React from "react";
import "./EditCoinsListItem.css";

import DeleteButton from "../../UI/DeleteButton/DeleteButton";
import AddButton from "../../UI/AddButton/AddButton";

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
const EditCoinsListItem = props => {
  let { name, symbol, marked, active } = props;

  let indexes = occurenceIndexes(name, marked);
  name = splitByIndex(name, marked, indexes).map(s =>
    s.toLowerCase() === marked.toLowerCase() ? (
      <mark className="EditCoinsListItem__mark">{s}</mark>
    ) : (
      s
    )
  );
  return (
    <div className="EditCoinsListItem">
      <div className="EditCoinsListItem__symbol">
        <i>{symbol}</i>
      </div>
      <div className="EditCoinsListItem__name">{name}</div>
      <div className="EditCoinsListItem__button">
        {active ? (
          <DeleteButton onClick={props.onClick} />
        ) : (
          <AddButton onClick={props.onClick} />
        )}
      </div>
    </div>
  );
};

export default EditCoinsListItem;
