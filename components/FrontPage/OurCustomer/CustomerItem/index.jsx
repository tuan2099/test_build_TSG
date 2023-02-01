import { FaQuoteRight } from "react-icons/fa";

const CustomerItem = ({ value }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="text-2xl">
        <FaQuoteRight />
      </div>
      <p className="mt-9 text-sm font-medium">{value.text}</p>
      <div className="flex gap-5 items-center mt-9">
        <img src="" alt="" />
        <div>
          <h3 className="text-lg font-semibold">{value.name}</h3>{" "}
          <p className="font-medium text-subMenuColor opacity-75">
            {value.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem;
