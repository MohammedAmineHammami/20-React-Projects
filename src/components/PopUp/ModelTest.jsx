import React, { useState } from "react";
import Model from "./Model";
import "./style.css";

function ModelTest() {
  const [showPopUp, setShowPopUp] = useState(false);

  const onClose = () => {
    setShowPopUp(false);
  };

  const handlePopUpClick = () => {
    setShowPopUp(!showPopUp);
  };
  return (
    <div
      style={{
        backgroundColor: showPopUp && "rgb(20, 30, 15,0.1)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <button
        className="popUpBtn"
        hidden={showPopUp}
        onClick={handlePopUpClick}
      >
        Show PopUp
      </button>
      {showPopUp && (
        <Model
          header={<h1>header</h1>}
          body={<p>body</p>}
          footer={<h2>footer</h2>}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default ModelTest;
