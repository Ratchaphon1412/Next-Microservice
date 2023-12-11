"use client";
import { useState, useEffect } from "react";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const images = ["https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
"https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
"https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"]
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
