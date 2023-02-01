import Image from "next/image";
import { customerImg, whyIcon, whyImg } from "../../../assets/image";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { langSelector } from "../../../redux/Slice/langSlice";

const Why = ({ data }) => {
  const lang = useSelector(langSelector);
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative bg-blueColor px-4 lg:px-0">
      <div className="flex-1 lg:mx-20 py-10">
        <h2 className="text-3xl font-semibold mt-3 mb-10">
          {lang === "vi" ? "Tại sao chọn chúng tôi?" : "Why choose us?"}
        </h2>
        {data?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 mb-5">
            <div className="w-[70px] h-[70px] rounded-[50%] text-white flex">
              <div className="m-auto">
                <Image
                  className="w-full object-cover"
                  src={whyIcon}
                  alt="icon"
                />
              </div>
            </div>
            <div className="inline-flex flex-col flex-1 justify-start">
              <h3 className="text-base mb-3 font-bold">{item.why_title}</h3>
              <p className="text-sm">{item.why_content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/2">
        <Image
          className="max-h-[800px] object-cover"
          src={customerImg}
          alt=""
        />
      </div>
    </div>
  );
};

Why.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Why;
