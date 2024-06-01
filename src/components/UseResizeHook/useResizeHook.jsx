import React, { useLayoutEffect, useState } from "react";

function useResizeHook() {
  const [resize, setResize] = useState({
    height: 0,
    width: 0,
  });

  const resizeListener = () => {
    setResize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
  return resize;
}

export default useResizeHook;
