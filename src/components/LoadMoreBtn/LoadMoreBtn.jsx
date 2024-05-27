import React, { useEffect, useState } from "react";
import "./style.css";
function LoadMoreBtn() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);

  const loadMore = () => {
    setCounter((c) => c + 1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          counter === 0 ? 0 : counter * 20
        }`
      );
      if (!response.ok) {
        throw new Error("api request refused!");
      }
      const data = await response.json();
      console.log(data.products);
      setProducts((prevData) => [...prevData, ...data.products]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (products === 100) {
      setDisableBtn(true);
    }
    fetchData();
  }, [counter]);

  useEffect(() => {
    if (products.length === 100) {
      setDisableBtn(true);
    }
  }, [products]);

  if (loading) {
    return <div>loading..!please wait.</div>;
  }
  return (
    <div>
      <div className="productsContenair">
        {products.map((el, i) => {
          return (
            <div className="productCard" key={i}>
              <img
                className="thumbnail"
                src={el.thumbnail}
                alt={el.thumbnail}
              />
              <h2>{el.title}</h2>
              <h1 className="price">price: {el.price}$</h1>
            </div>
          );
        })}
      </div>

      {disableBtn ? (
        <h1 style={{ color: "red" }}>you are reach the limit: 100 products </h1>
      ) : (
        <button
          className="loadMoreBtn"
          disabled={disableBtn}
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default LoadMoreBtn;
