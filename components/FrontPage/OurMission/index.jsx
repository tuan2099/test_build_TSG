import MissionItem from "./MissionItem";

import PropTypes from "prop-types";

const OurMission = ({ data }) => {
  return (
    <div className="bg-white p-4 lg:p-0">
      <div
        className="lg:-translate-y-1/2 max-w-[1200px] m-auto px-12 py-16 flex flex-col lg:flex-row justify-between gap-6"
        style={{
          backgroundImage:
            "url(https://smartdemowp.com/cameron/wp-content/themes/cameron/assets/images/resources/process-bg-1-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {data?.map((item, index) => (
          <MissionItem value={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

OurMission.propTypes = {
  data: PropTypes.array.isRequired,
};

export default OurMission;
