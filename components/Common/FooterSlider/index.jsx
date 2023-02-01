import React, { useEffect, useRef } from "react";
import { useState } from "react";

import PropTypes from "prop-types";

const FooterSlider = ({ data, perPage }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const [currentWidth, setCurrentWidth] = useState();
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setCurrentWidth(ref.current.clientWidth);
      window.addEventListener("resize", () => {
        setCurrentWidth(ref.current.clientWidth);
      });
    }

    return () =>
      window.removeEventListener("resize", () => {
        setCurrentWidth(ref.current.clientWidth);
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
        {data.map((item) => {
          return (
            <div
              key={item.img.id}
              className="px-14 smoblie:px-20 md:px-10"
              style={{
                width: `${currentWidth / perPage}px`,
              }}
            >
              <img
                src={item.img.url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

FooterSlider.propTypes = {
  data: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
};

export default FooterSlider;
