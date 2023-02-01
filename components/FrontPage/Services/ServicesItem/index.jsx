import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { langSelector } from "../../../../redux/Slice/langSlice";
import Button from "../../../Common/Button";

const ServicesItem = ({ value }) => {
  const lang = useSelector(langSelector);
  return (
    <div className="flex-1 group hover:cursor-pointer">
      <div className="mb-5 h-44 bg-blueColor flex group-hover:bg-greenColor duration-300">
        <Image src={value.icon} alt="" className="object-cover" />
      </div>
      <div className="p-10 border border-[#d3d3d3] min-h-[380px] flex flex-col justify-between">
        <h3 className="text-xl font-medium min-h-[70px]">
          <Link href={value.slug}>{value.title}</Link>
        </h3>
        <p className="mb-8 text-sm text-subMenuColor opacity-75">
          {value.content}
        </p>
        <div>
          <Button
            value={lang === "vi" ? "Xem thêm" : "Read more"}
            href={value.slug}
          />
        </div>
      </div>
    </div>
  );
};

ServicesItem.propTypes = {
  value: PropTypes.object.isRequired,
};

export default ServicesItem;
