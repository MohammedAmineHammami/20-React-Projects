import React from "react";
import CustomHook from "./CustomHook";

function UseFetchHook() {
  const [products, loading] = CustomHook("https://dummyjson.com/products");
  console.log(products);

  return (
    <div>
      <h1>UseFetchHook</h1>
      {loading && <p>loading..!please wait!</p>}
      {products &&
        products.length > 0 &&
        products.map((el, i) => {
          return <p key={i}>{el.title}</p>;
        })}
    </div>
  );
}

export default UseFetchHook;
