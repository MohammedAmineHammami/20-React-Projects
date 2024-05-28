import React, { useEffect, useState } from "react";
import "./style.css";

export default function ScrollIndicator({ url, limit = "100" }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScrollePercentage = () => {
    let howMuchScrolle = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolle * 100) / height);
  };

  const fetchData = (getUrl) => {
    fetch(`${getUrl}?limit=${limit}`)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setData(data.products);
        console.log(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollePercentage);
    console.log(scrollPercentage);
  }, [scrollPercentage]);
  if (loading) {
    return <h2>Loading..!please wait..</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <div className="header">
        <h1>Scrolle Indicator</h1>
        <div
          style={{
            left: "0px",
            width: `${scrollPercentage}%`,
            height: "10px",
            backgroundColor: "red",
          }}
        ></div>
      </div>
      {data &&
        data.length > 0 &&
        data.map((el, i) => {
          return (
            <h2 style={{ position: "relative", top: "150px" }} key={i}>
              {el.title}
            </h2>
          );
        })}
    </div>
  );
}
