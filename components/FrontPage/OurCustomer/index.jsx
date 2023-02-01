import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import PropTypes from "prop-types";
import CustomerSlider from "../../Common/CustomerSlider";
import Image from "next/image";
import { customerImg, whyImg } from "../../../assets/image";

const OurCustomer = ({ data }) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  return (
    <div>
      <div className="max-w-[1200px] m-auto px-4 py-32 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/2 flex justify-end">
          <ScrollTrigger
            onEnter={() => setIsOnScreen(false)}
            onExit={() => setIsOnScreen(true)}
          >
            <div
              className="duration-1000"
              style={{
                transform: isOnScreen ? "translateX(-1000px)" : "translateX(0)",
              }}
            >
              <Image className="max-h-[600px]" src={whyImg} alt="" />
            </div>
          </ScrollTrigger>
        </div>
        <div className="w-full lg:w-1/3 overflow-hidden h-full py-10">
          <CustomerSlider data={data} perPage={1} />
        </div>
      </div>
    </div>
  );
};

OurCustomer.propTypes = {
  data: PropTypes.array.isRequired,
};

export default OurCustomer;
