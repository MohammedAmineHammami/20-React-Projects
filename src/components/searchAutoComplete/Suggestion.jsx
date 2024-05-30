import React from "react";
import "./style.css";
function Suggestion({ data, fn }) {
  return (
    <div className="listItems">
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return (
            <li className="li" key={i} onClick={() => fn(el)}>
              {el.firstName}
            </li>
          );
        })}
    </div>
  );
}

export default Suggestion;
