import CountUp from "react-countup";
import PropTypes from "prop-types";

const CounterItem = ({ max, unit, value, icon }) => {
  return (
    <div className="flex items-center gap-5 mb-5 lg:mb-0">
      <div className="w-[70px] h-[70px] rounded-[50%] bg-greenColor text-white flex">
        <div className="m-auto text-2xl">{icon}</div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center mb-4 gap-1">
          <div className="text-5xl font-medium">
            <CountUp start={0} end={max} duration={5} />
          </div>{" "}
          <p className="text-2xl">{unit}</p>
        </div>
        <div className="text-sm text-subMenuColor opacity-75">{value}</div>
      </div>
    </div>
  );
};

CounterItem.propTypes = {
  max: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.any,
};

export default CounterItem;
