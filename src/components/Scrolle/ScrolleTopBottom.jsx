import React, { useCallback, useRef } from "react";
import CustomHook from "../UseFetchHook/CustomHook.jsx";

function ScrolleTopBottom() {
  const [data, loading] = CustomHook("https://dummyjson.com/products");
  const ref = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToBottom = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  if (loading) {
    return <h3>loading..!please wait..</h3>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1>Scroll-Top-Bottom</h1>
      <button
        style={{ width: "150px", marginLeft: "46vw" }}
        onClick={scrollToBottom}
      >
        Scrolle To Bottom
      </button>
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return <h3>{el.title}</h3>;
        })}
      <button
        style={{ width: "150px", marginLeft: "46vw", marginBottom: "20px" }}
        onClick={scrollToTop}
      >
        Scrolle To Top
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default ScrolleTopBottom;
