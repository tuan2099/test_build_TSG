import Link from "next/link";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { langSelector } from "../../../redux/Slice/langSlice";

const PopularBanner = ({ imageUrl, title }) => {
  const lang = useSelector(langSelector);
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="py-28 text-center w-full h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <h2 className="text-4xl lg:text-6xl text-white font-medium">{title}</h2>
        <div className="flex items-center gap-1 justify-center text-white mt-3 text-sm">
          <Link href="/">{lang === "vi" ? "Trang chủ" : "Home"}</Link>
          <span className="">/</span> <p className="">{title}</p>
        </div>
      </div>
    </div>
  );
};

PopularBanner.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default PopularBanner;
