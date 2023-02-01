import ServicesItem from "./ServicesItem";
import { servicesList, servicesListEN } from "../../../utils/constants";
import { useSelector } from "react-redux";
import { langSelector } from "../../../redux/Slice/langSlice";
import { useEffect, useState } from "react";

const Services = () => {
  const lang = useSelector(langSelector);
  const [list, setList] = useState(servicesList);
  useEffect(() => {
    switch (lang) {
      case "vi":
        setList(servicesList);
        break;
      case "en":
        setList(servicesListEN);
        break;
      default:
        setList(servicesList);
    }
  }, [lang]);
  return (
    <div className="max-w-[1200px] m-auto px-4 pt-32 lg:px-0 lg:pt-0 pb-32">
      <div className="flex items-center justify-center gap-3 text-3xl lg:text-3xl font-bold mt-3 mb-10">
        <span className="block w-10 h-[2px] bg-black"></span>
        <p>{lang === "vi" ? "Dịch vụ cung cấp" : "Our services"}</p>
        <span className="block w-10 h-[2px] bg-black"></span>
      </div>
      <p className="text-center mt-6 mb-12 text-sm text-greenColor">
        {lang === "vi"
          ? "Với các mức độ kinh nghiệm và đào tạo khác nhau mà các sĩ quan của chúng tôi có, chúng tôi có thể hợp tác với từng đối tượng khách hàng thích hợp."
          : "With our officers' varying levels of experience and training, we are able to work with any client who is a good fit for us."}
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {list.map((item, index) => (
          <ServicesItem value={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
