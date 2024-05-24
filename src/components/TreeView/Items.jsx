import React, { useState } from "react";
import List from "./List";
import { FaPlus, FaMinus } from "react-icons/fa";

function Items({ item }) {
  const [currentLabel, setCurrentLable] = useState({});
  const handleClick = (label) => {
    setCurrentLable({ ...currentLabel, [label]: !currentLabel[label] });
  };
  console.log(currentLabel);
  return (
    <li>
      <div className="parentLabel">
        <h4>{item.label}</h4>
        <span className="sign" onClick={() => handleClick(item.label)}>
          {item.children && item.children.length > 0 ? (
            currentLabel[item.label] ? (
              <FaMinus size={18} />
            ) : (
              <FaPlus size={18} />
            )
          ) : (
            ""
          )}
        </span>
      </div>

      {item.children && item.children.length > 0 && currentLabel[item.label] ? (
        <List list={item.children} />
      ) : null}
    </li>
  );
}

export default Items;
