import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { i404 } from "../assets/image";
import Button from "../components/Common/Button";
import { langSelector } from "../redux/Slice/langSlice";

const NotFound = () => {
  const lang = useSelector(langSelector);
  return (
    <div className="w-full lg:w-[80vw] h-[100vh] m-auto relative flex">
      <Image
        className="w-full lg:h-full object-cover m-auto"
        src={i404}
        alt="404"
      />
      <div className="absolute bottom-1/4 lg:bottom-12 right-1/2 translate-x-1/2">
        <Button href="/" value={lang === "vi" ? "Trang chủ" : "Home"} key="0" />
      </div>
    </div>
  );
};
export default NotFound;
