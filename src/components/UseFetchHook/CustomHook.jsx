import React, { useEffect, useState } from "react";

function CustomHook(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllData = (url) => {
    fetch(url)
      .then((response) => {
        setLoading(true);
        return response.json();
      })
      .then((data) => {
        setData(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchAllData(url);
  }, [url]);
  return [data, loading];
}

export default CustomHook;
