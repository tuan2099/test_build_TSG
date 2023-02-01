import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Button from "../../Common/Button";

import PropTypes from "prop-types";

import "swiper/css";

const Banner = ({ data }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="z-0">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          loop: true,
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[40vh] lg:h-[110vh] relative">
              <img
                className="w-full h-full object-cover"
                src={item.banner_image}
                alt="banner"
              />
              <div className="flex flex-col absolute top-1/2 lg:left-14 -translate-y-1/2 text-white">
                <h1 className="lg:text-5xl font-bold mb-5">{item.heading}</h1>
                <p className="text-lg font-normal mb-11">{item.description}</p>
                <div>
                  <Button href="" value="Next" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Banner.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Banner;
