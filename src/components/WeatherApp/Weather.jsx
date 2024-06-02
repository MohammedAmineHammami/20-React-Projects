import React, { useEffect, useState } from "react";
import Search from "./Search";
function Weather() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("tunis");
  const [err, setErr] = useState(null);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const getForecast = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17327e862cbc7965bdda7f36e3952257`
      );
      const data = await response.json();
      console.log(data);
      setForecast(data);
      setLoading(false);
    } catch (err) {
      setErr(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getForecast();
  }, [city]);

  return (
    <div
      style={{
        backgroundColor: "darkcyan",
        color: "white",
        width: "500px",
        height: "auto",
        padding: "20px",
        marginLeft: "39vw",
        borderRadius: "20px",
        boxShadow: "2px 1px 10px gray",
        marginTop: "50px",
      }}
    >
      <Search fn={setCity} />

      {loading ? (
        <h3>Loading..!please wait..</h3>
      ) : forecast && !err ? (
        <div>
          <h1>
            {forecast.name} - {forecast.sys.country}
          </h1>
          <strong>{getCurrentDate()}</strong>
          <h1>{(forecast.main.temp - 273.15).toFixed(2)}°C</h1>
          <h3>{forecast.weather[0].description}</h3>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <h2>{forecast.wind.speed}</h2>
              <h3>Wind Speed</h3>
            </div>
            <div>
              <h2>{forecast.main.humidity}</h2>
              <h3>Humidity</h3>
            </div>
          </div>
        </div>
      ) : (
        <h2>data not available..!please try again.</h2>
      )}
    </div>
  );
}

export default Weather;
