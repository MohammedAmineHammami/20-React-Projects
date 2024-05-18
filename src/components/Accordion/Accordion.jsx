import React, { useState } from "react";
import data from "./data.js";
import "./style.css";
function Accordion() {
  const [prevId, setPrevId] = useState(null);
  const [multiId, setMultiId] = useState([]);
  const [btnState, setBtnState] = useState(false);

  const handleSingleDisplay = (currentId) => {
    setPrevId(prevId === currentId ? null : currentId);
  };

  const handleMultiDisplay = (currentId) => {
    const ids = [...multiId];
    let currentIdIndex = ids.indexOf(currentId);
    if (currentIdIndex === -1) {
      ids.push(currentId);
    } else {
      ids.splice(currentIdIndex, 1);
    }
    setMultiId(ids);
  };
  return (
    <div className="contenair">
      <button className="btn" onClick={() => setBtnState(!btnState)}>
        {btnState ? <h3>Single-Display</h3> : <h3>Multi-Display</h3>}
      </button>
      <div className="accordion">
        {data.map((el, i) => {
          return (
            <div className="item" key={i}>
              <div
                className="question"
                onClick={
                  btnState
                    ? () => handleMultiDisplay(el.id)
                    : () => handleSingleDisplay(el.id)
                }
              >
                <h3>{el.question}</h3>
                {el.id === prevId ? (
                  <h3 className="plus">-</h3>
                ) : (
                  <h3 className="plus">+</h3>
                )}
              </div>
              {(prevId === el.id || multiId.indexOf(el.id) !== -1) && (
                <div className="answer">
                  <p>{el.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Accordion;
