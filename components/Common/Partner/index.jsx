import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import PropTypes from "prop-types";
import { useCurrentViewport } from "../../../hooks/useCurrentViewprot";

import "swiper/css";

const Partner = ({ partner }) => {
  SwiperCore.use([Autoplay]);
  const { isMobile } = useCurrentViewport();

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[1200px] m-auto px-4">
        <Swiper
          slidesPerView={isMobile ? 1 : 6}
          spaceBetween={isMobile ? 0 : 50}
          autoplay={{
            delay: 3000,
            loop: true,
          }}
        >
          {partner.map((item) => (
            <SwiperSlide key={item.img.ID}>
              <img
                className="w-[150px] lg:w-full m-auto"
                src={item.img.url}
                alt="partner logo"
                key={item.img.ID}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Partner.propTypes = {
  partner: PropTypes.array,
};

export default Partner;
