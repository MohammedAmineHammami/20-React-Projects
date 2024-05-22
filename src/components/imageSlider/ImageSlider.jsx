import React, { useEffect, useState } from "react";
import "./style.css";
import { FaDotCircle } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

function ImageSlider({ url, page = 5, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLeftArrow = () => {
    setSlideIndex(slideIndex === 0 ? images.length - 1 : slideIndex - 1);
  };
  const handleRightArrow = () => {
    setSlideIndex(slideIndex >= images.length - 1 ? 0 : slideIndex + 1);
    console.log();
  };

  const handleIndecator = (i) => {
    setSlideIndex(i);
  };

  const fetchData = () => {
    fetch(`${url}?page=${page}&limit=${limit}`)
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          //this constructor will automatically execute the catch block
          throw new Error("api error occure!");
        }
        //this is a promise will be handle in then next then block
        return response.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(images);
  }, [url, limit, page]);

  if (loading) {
    return <div>loading...!please wait.</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="imageSlider">
      <IoIosArrowDropleftCircle
        size={30}
        className="arrow leftArrow"
        onClick={handleLeftArrow}
      />
      {images.map((el, i) => {
        return (
          <img
            key={i}
            src={el.download_url}
            alt={el.download_url}
            className={slideIndex === i ? "showSlide" : "hideSlide"}
          />
        );
      })}
      <IoIosArrowDroprightCircle
        size={30}
        className="arrow rightArrow"
        onClick={handleRightArrow}
      />
      {images.length > 0 &&
        [...Array(images.length)].map((_, i) => {
          return (
            <FaDotCircle
              key={i}
              size={20}
              className={
                i === slideIndex
                  ? "activeIndicator indicator"
                  : "inactiveIndicator indicator"
              }
              onClick={() => handleIndecator(i)}
            />
          );
        })}
    </div>
  );
}

export default ImageSlider;
