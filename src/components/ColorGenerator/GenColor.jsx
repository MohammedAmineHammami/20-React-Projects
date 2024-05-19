import React, { useEffect, useState } from "react";
import "./style.css";

const hexPatrn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function GenColor() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#000000");

  const genRandom = (length) => {
    return Math.floor(length * Math.random());
  };
  //generate random hex color
  const genHex = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hexPatrn[genRandom(hexPatrn.length)];
    }
    setColor(hexColor);
  };
  //generate random rgb color
  const genRgb = () => {
    let r = genRandom(256);
    let g = genRandom(256);
    let b = genRandom(256);
    let rgbColor = `rgb(${r},${g},${b})`;
    setColor(rgbColor);
  };

  useEffect(() => {
    if (type === "hex") {
      genHex();
    } else {
      genRgb();
    }
  }, [type]);

  return (
    <div style={{ backgroundColor: color, width: "100vw", height: "100vh" }}>
      <button onClick={() => setType("hex")}>generate hex</button>
      <button onClick={() => setType("rgb")}>generate rgb</button>
      <button onClick={type === "hex" ? genHex : genRgb}>
        generate random
      </button>

      <div className="colorInfos">
        <h1>{type}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default GenColor;
