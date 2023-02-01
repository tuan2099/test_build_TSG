import PropTypes from "prop-types";

const MissionItem = ({ value, index }) => {
  return (
    <div className="flex-1">
      <div className="flex items-center text-greenColor gap-2">
        <div className="w-8 h-[2px] bg-white"></div>
        <div className="text-2xl font-bold text-white">0{index + 1}</div>
      </div>
      <div className="mt-5 mb-4 text-white font-medium text-2xl">
        {value.mission_title}
      </div>
      <p className="text-sm text-white opacity-75">{value.mission_content}</p>
    </div>
  );
};

MissionItem.propTypes = {
  value: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionItem;
