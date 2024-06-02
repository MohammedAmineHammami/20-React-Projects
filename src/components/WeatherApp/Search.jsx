import React, { useState } from "react";

function Search({ fn }) {
  const [input, setInput] = useState("");
  const handleClick = () => {
    if (input) {
      fn(input);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <input
        style={{
          width: "150px",
          height: "30px",
          borderRadius: "20px",
          border: "none",
          paddingLeft: "20px",
        }}
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter the city name.."
      />
      <button
        style={{
          height: "30px",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "darkcyan",
          color: "white",
          border: "2px solid white",
          borderRadius: "5px",
          boxShadow: "1px 1px 5px black",
        }}
        onClick={handleClick}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
