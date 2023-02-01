import PropTypes from "prop-types";
import { FaQuoteRight } from "react-icons/fa";

const StandardItem = ({ value }) => {
  return (
    <div className="px-12 py-16 mb-7 lg:mb-0 flex-1 flex flex-col bg-white hover:bg-greenColor z-10 lg:-translate-y-1/3 cursor-pointer group duration-150">
      <div className="text-2xl text-greenColor pt-8 mb-5 group-hover:text-white">
        <FaQuoteRight />
      </div>
      <div className="text-sm lg:text-lg font-medium text-black group-hover:text-white">
        {value.commit_content}
      </div>
    </div>
  );
};

StandardItem.propTypes = {
  value: PropTypes.object,
};

export default StandardItem;
