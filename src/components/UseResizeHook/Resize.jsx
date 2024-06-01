import React from "react";
import useResizeHook from "./useResizeHook";

function Resize() {
  const { width, height } = useResizeHook();
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
      <h2>width: {width}px</h2>
      <h2>height: {height}px</h2>
    </div>
  );
}

export default Resize;
