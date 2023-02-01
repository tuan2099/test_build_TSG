import { useEffect, useState } from "react";
import { FaHeart, FaRegBuilding, FaTrophy, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import ScrollTrigger from "react-scroll-trigger";
import { langSelector } from "../../../redux/Slice/langSlice";
import CounterItem from "./CounterItem";

const counterList = [
  {
    max: 10,
    unit: "năm",
    value: "Kinh nghiệm",
    icon: <FaTrophy />,
  },
  {
    max: 80,
    unit: "+",
    value: "Dự án",
    icon: <FaRegBuilding />,
  },
  {
    max: 90,
    unit: "%",
    value: "Khách hàng hài lòng",
    icon: <FaHeart />,
  },
  {
    max: 95,
    unit: "%",
    value: "Khách hàng tiếp tục sử dụng dịch vụ",
    icon: <FaUsers />,
  },
];

const counterListEN = [
  {
    max: 10,
    unit: "years",
    value: "Experience",
    icon: <FaTrophy />,
  },
  {
    max: 80,
    unit: "+",
    value: "Projects",
    icon: <FaRegBuilding />,
  },
  {
    max: 90,
    unit: "%",
    value: "Clients Are Satisfied With Our Services",
    icon: <FaHeart />,
  },
  {
    max: 95,
    unit: "%",
    value: "Clients Want To Continue Using Our Services",
    icon: <FaUsers />,
  },
];

const Counter = () => {
  const [isCount, setIsCount] = useState(false);
  const [list, setList] = useState(counterList);
  const lang = useSelector(langSelector);
  useEffect(() => {
    switch (lang) {
      case "vi":
        setList(counterList);
        break;
      case "en":
        setList(counterListEN);
        break;
      default:
        setList(counterList);
    }
  }, [lang]);
  return (
    <ScrollTrigger
      onEnter={() => setIsCount(true)}
      onExit={() => setIsCount(false)}
    >
      <div className="py-[74px]">
        <div className="max-w-[1200px] m-auto flex flex-col lg:flex-row px-4 justify-between">
          {isCount &&
            list.map((item, index) => (
              <div className="w-full lg:w-1/4" key={index}>
                <CounterItem
                  max={item.max}
                  unit={item.unit}
                  value={item.value}
                  icon={item.icon}
                />
              </div>
            ))}
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
