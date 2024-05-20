import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function RatingBar({ starNum = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getCurrentRating = (currentIndex) => {
    setRating(currentIndex);
  };
  const getHoverOutRating = () => {
    setHover(rating);
  };
  const getHoverRating = (hoverIndex) => {
    setHover(hoverIndex);
  };
  return (
    <div>
      <h1>Rating: {rating}</h1>
      <h1>Hover: {hover}</h1>
      {[...Array(starNum)].map((_, i) => {
        i++;
        return (
          <FaStar
            className={i <= (hover || rating) ? "active" : "inactive"}
            size={40}
            key={i}
            onClick={() => getCurrentRating(i)}
            onMouseMove={() => getHoverRating(i)}
            onMouseLeave={() => getHoverOutRating()}
          />
        );
      })}
    </div>
  );
}

export default RatingBar;
