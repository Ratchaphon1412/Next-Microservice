"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Landing/second/button";
import Card from "@/components/Landing/second/card";

export default function Component() {
  const [slide, setSlide] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });

    return () => window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    });

  }, []);

  // fix prev and next bug
  function prevButton() {
    if (slide <= 1) {
      setSlide(1);
      return;
    }

    if (width > 1280) {
      setSlide(slide - 3);
    } else {
      setSlide(slide - 1);
    }
  }

  function nextButton() {
    if (slide >= 5) {
      setSlide(5);
      return;
    }

    if (width > 1280) {
      setSlide(slide + 3);
    } else {
      setSlide(slide + 1);
    }
  }

  // image use next image
  return (
    <div className="w-screen min-h-screen items-center flex flex-col justify-center max-[1280px]:px-32 px-4">
      <div>DISCOVER OUR COLLECTION</div>
      <div className="flex items-center justify-center">
        <Button callBack={prevButton} slideNum={slide} direction="<"></Button>
        <div className="w-full h-full carousel rounded-box gap-2">
          <div
            id="slide1"
            className="carousel-item h-[400px] max-[1280px]:w-full w-1/3 card card-compact bg-base-100"
          >
            <Card imageSrc="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"></Card>
          </div>

          <div
            id="slide2"
            className="carousel-item h-[400px] max-[1280px]:w-full w-1/3 card card-compact bg-base-100 "
          >
            <Card imageSrc="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"></Card>
          </div>

          <div
            id="slide3"
            className="carousel-item h-[400px] max-[1280px]:w-full w-1/3 card card-compact bg-base-100 "
          >
            <Card imageSrc="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"></Card>
          </div>

          <div
            id="slide4"
            className="carousel-item h-[400px] max-[1280px]:w-full w-1/3 card card-compact bg-base-100 "
          >
            <Card imageSrc="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"></Card>
          </div>

          <div
            id="slide5"
            className="carousel-item h-[400px] max-[1280px]:w-full w-1/3 card card-compact bg-base-100 "
          >
            <Card imageSrc="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"></Card>
          </div>
        </div>
        <Button callBack={nextButton} slideNum={slide} direction=">"></Button>
      </div>
    </div>
  );
}
