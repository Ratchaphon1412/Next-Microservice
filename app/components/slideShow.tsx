"use client";
import { useState, useEffect } from "react";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const images = [
  "/assets/images/slide/alexander-wende.jpg",
  "/assets/images/slide/lorenzo-herrera.jpg",
  "/assets/images/slide/travis-yewell.jpg",
];
const delay = 2500;

export default function Component() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((imagePath, index) => (
          <img className="slide" src={imagePath} key={index} />
        ))}
      </div>
    </div>
  );
}
