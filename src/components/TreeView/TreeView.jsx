import React from "react";
import "./style.css";
import List from "./List";

function TreeView({ menu = [] }) {
  return (
    <div className="treeViewContenair">
      <List list={menu} />
    </div>
  );
}

export default TreeView;
