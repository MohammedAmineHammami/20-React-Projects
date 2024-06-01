import React, { useRef, useState } from "react";
import "./style.css";
import CustomHook from "./CustomHook";

function ClickOutSideHook() {
  const [showDiv, setShowDiv] = useState(false);
  const ref = useRef(null);
  CustomHook(ref, () => setShowDiv(false));
  return (
    <div>
      {showDiv ? (
        <div ref={ref} className="theDiv">
          <h1>The div Header</h1>
          <section>this is the body,here is some dummy words..</section>
          <h2>The footer</h2>
        </div>
      ) : (
        <button
          className="clickOutSideBtn"
          onClick={() => setShowDiv(!showDiv)}
        >
          showDiv
        </button>
      )}
    </div>
  );
}

export default ClickOutSideHook;
