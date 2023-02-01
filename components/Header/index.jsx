import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaPhone,
  FaViber,
} from "react-icons/fa";
import { logo, logoTitle } from "../../assets/image";
import MobileMenu from "../MobileMenu";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../../redux/Slice/langSlice";
import { useRouter } from "next/router";

const Header = ({ dropMenu, header }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = useSelector(langSelector);
  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    setCurrentLang(lang);
  }, [lang]);

  return (
    <header className="w-full">
      <div className="bg-subMenuColor">
        <div className="max-w-[1200px] m-auto py-3 text-white flex flex-col px-4 lg:px-0 lg:flex-row justify-end gap-4  bg-subMenuColor">
          <div className="flex items-center text-sm lg:text-xl gap-3 cursor-pointer hover:text-greenColor duration-300">
            <p className="text-base">
              <FaPhone />
            </p>
            <a className="text-base" href="tel:02466661099">
              024.6666.1099
            </a>
          </div>
          <div className="flex items-center text-sm lg:text-xl gap-3 cursor-pointer hover:text-greenColor duration-300">
            <p className="text-base">
              <FaEnvelope />
            </p>
            <a className="text-sm" href="tel:02466661099">
              Congtybaovetsg@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 mt-3 lg:mt-0 cursor-pointer">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/BAOVETSGVIETNAM">
                <div className="m-auto text-sm lg:text-base">
                  <FaFacebook />
                </div>
              </a>
              <a href="mailto:Congtybaovetsg@gmail.com">
                <div className="m-auto text-sm lg:text-base">
                  <FaEnvelope />
                </div>
              </a>
              <div className="">
                <div className="m-auto text-sm lg:text-base">
                  <FaViber />
                </div>
              </div>
              <div className="">
                <div className="m-auto text-sm lg:text-base">
                  <FaGoogle />
                </div>
              </div>
            </div>
          </div>

          <select
            className="bg-transparent"
            value={currentLang}
            onChange={(e) => {
              dispatch(langSlice.actions.setLang(e.target.value));
              localStorage.setItem("lang",e.target.value)
              router.push("/");
            }}
          >
            <option className="bg-white text-subMenuColor w-full" value="vi">
              VI
            </option>
            <option className="bg-white text-subMenuColor w-full" value="en">
              EN
            </option>
          </select>
        </div>
      </div>

      <div
        className="bg-white"
        style={
          dropMenu
            ? {
                position: "fixed",
                top: "0",
                right: "0",
                left: "0",
                zIndex: "90",
                animation: "dropMenu 1s ease",
              }
            : {}
        }
      >
        <div className="max-w-[1200px] m-auto flex justify-center lg:justify-between items-center relative">
          <Link href="/" passHref>
            <div className="flex items-center">
              <Image className="w-24 lg:w-28" src={logo} alt="tsg-logo" />
              <Image className="w-32 lg:w-48" src={logoTitle} alt="" />
            </div>
          </Link>
          <div className="hidden lg:flex gap-7 text-base font-medium">
            {header?.headerMenuItems.map((item) => (
              <div key={item.ID} className="py-12 relative group">
                <Link
                  href={
                    item.pageSlug.indexOf("-") === -1
                      ? `/${item.pageSlug}`
                      : `/${item.pageSlug.slice(0, item.pageSlug.indexOf("-"))}`
                  }
                  passHref
                >
                  {item.title}
                </Link>
                {item.children.length ? (
                  <div className="absolute z-20 top-full hidden group-hover:flex flex-col">
                    {item.children.map((child) => (
                      <div
                        key={child.ID}
                        className="py-3 px-8 min-w-[350px] text-sm bg-subMenuColor text-white border-t border-blueColor hover:bg-greenColor hover:border-greenColor duration-300"
                      >
                        <Link href={`/page/${child.pageSlug}`} passHref>
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div
            className="block lg:hidden absolute right-3"
            onClick={() => setShowMobileMenu(true)}
          >
            <FaBars />
          </div>
        </div>
      </div>

      <MobileMenu
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        header={header}
      />
    </header>
  );
};

Header.propTypes = {
  dropMenu: PropTypes.bool.isRequired,
};

export default Header;
