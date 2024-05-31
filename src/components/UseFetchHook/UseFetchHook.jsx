import React from "react";
import CustomHook from "./CustomHook";

function UseFetchHook() {
  const [products, loading] = CustomHook("https://dummyjson.com/products");
  console.log(products);

  return (
    <div>
      {loading && <p>loading..!please wait!</p>}
      {products &&
        products.length > 0 &&
        products.map((el, i) => {
          return <p>{el.title}</p>;
        })}
    </div>
  );
}

export default UseFetchHook;
