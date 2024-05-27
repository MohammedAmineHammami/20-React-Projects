import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

function ReactQrCode() {
  const [input, setInput] = useState(" ");
  const [qrValue, setQrValue] = useState("");
  const generate = () => {
    setQrValue(input);
  };
  console.log(input.trim());
  return (
    <div>
      <h1>QrCode Generator</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="input"
        />
        <button
          disabled={input && input.trim() === "" ? true : false}
          onClick={generate}
        >
          Generate
        </button>
      </div>

      <QRCode
        size={256}
        style={{
          height: "auto",
          maxWidth: "250px",
          width: "250px",
        }}
        value={qrValue}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default ReactQrCode;
