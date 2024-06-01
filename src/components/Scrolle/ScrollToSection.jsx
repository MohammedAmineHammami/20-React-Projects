import React, { useRef } from "react";
import CustomHook from "../UseFetchHook/CustomHook";

function ScrollToSection() {
  const [data, loading] = CustomHook("https://dummyjson.com/products?limit=15");
  const ref = useRef(null);

  if (loading) {
    return <h4>loading..!please wait..</h4>;
  }
  const scrollIntoDiv = () => {
    let divPosition = ref.current.getBoundingClientRect().top;
    ref.current.scrollIntoView({
      top: divPosition,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1>Scroll into specific Section</h1>
      <button onClick={scrollIntoDiv}>Scroll red Div</button>
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return <h3>{el.title}</h3>;
        })}
      <div
        ref={ref}
        style={{
          backgroundColor: "darkcyan",
          width: "100px",
          height: "100px",
          marginLeft: "44vw",
        }}
      ></div>
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return <h3>{el.title}</h3>;
        })}
    </div>
  );
}

export default ScrollToSection;
