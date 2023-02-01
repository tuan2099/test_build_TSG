import React, { useEffect, useRef } from "react";
import { useState } from "react";

import PropTypes from "prop-types";

const BannerSlide = ({ data, perPage }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentWidth, setCurrentWidth] = useState();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setCurrentWidth(ref?.current.clientWidth);
      window.addEventListener("resize", () => {
        setCurrentWidth(ref?.current.clientWidth);
      });
    }

    return () =>
      window.removeEventListener("resize", () => {
        setCurrentWidth(ref?.current.clientWidth);
      });
  }, []);

  useEffect(() => {
    const run = setInterval(() => {
      if (currentSlider < data?.length - perPage)
        setCurrentSlider(currentSlider + 1);
      else setCurrentSlider(0);
    }, 3000);
    return () => clearInterval(run);
  }, [currentSlider]);

  return (
    <div className="flex w-full relative overflow-hidden select-none" ref={ref}>
      <div
        className="relative flex box-content duration-300"
        style={{
          transform: `translateX(-${
            (currentSlider * currentWidth) / perPage
          }px)`,
        }}
      >
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[40vh] lg:h-[110vh] relative"
              style={{
                width: `${currentWidth / perPage}px`,
              }}
            >
              <div className="absolute w-full h-full bg-bgPrimary"></div>
              <img
                className="w-full h-full object-cover"
                src={item.banner_image}
                alt="banner"
              />
              <div className="flex flex-col absolute top-1/2 lg:left-14 -translate-y-1/2 text-white">
                <h1 className="lg:text-5xl font-bold mb-5">{item.heading}</h1>
                <p className="text-lg font-normal mb-11">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BannerSlide.propTypes = {
  data: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
};

export default BannerSlide;
