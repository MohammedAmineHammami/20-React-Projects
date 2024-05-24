import React from "react";
import Items from "./Items.jsx";
function List({ list }) {
  return (
    <ul>
      {list &&
        list.length > 0 &&
        list.map((el, i) => <Items item={el} key={i} />)}
    </ul>
  );
}

export default List;
