import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

import PropTypes from "prop-types";

const CustomerSlider = ({ data, perPage }) => {
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
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: `${currentWidth / perPage}px`,
              }}
            >
              <div className="flex flex-col justify-between">
                <div className="text-2xl">
                  <FaQuoteRight />
                </div>
                <p className="mt-9 text-sm font-medium">
                  <i>{item.text}</i>
                </p>
                <div className="flex gap-5 items-center mt-9">
                  <img src="" alt="" />
                  <div>
                    <h3 className="text-base font-semibold">{item.name}</h3>{" "}
                    <p className="text-sm text-subMenuColor opacity-75">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            // <div
            //   key={index}
            //   className="flex flex-col justify-between"
            //   style={{
            //     width: `${currentWidth / perPage}px`,
            //   }}
            // >
            //   <div className="text-2xl">
            //     <FaQuoteRight />
            //   </div>
            //   <p className="mt-9 text-xl font-medium">{item.text}</p>
            //   <div className="flex gap-5 items-center mt-9">
            //     <img src="" alt="" />
            //     <div>
            //       <h3 className="text-xl font-semibold">{item.name}</h3>{" "}
            //       <p className="font-base text-subMenuColor opacity-75">
            //         {item.position}
            //       </p>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

CustomerSlider.propTypes = {
  data: PropTypes.array.isRequired,
  perPage: PropTypes.number.isRequired,
};

export default CustomerSlider;
