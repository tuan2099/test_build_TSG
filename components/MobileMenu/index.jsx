import Link from "next/link";
import PropTypes from "prop-types";

import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ showMobileMenu, setShowMobileMenu, header }) => {
  return (
    <div
      className="block lg:hidden bg-subMenuColor fixed top-0 right-0 w-[80vw] h-[100vh] pt-16 overflow-y-auto duration-200 z-[99]"
      style={{
        transform: showMobileMenu ? "translateX(0)" : "translateX(100%)",
      }}
    >
      <div className="flex justify-end px-4 mb-8">
        <div className="flex h-6 w-6 rounded-[50%] bg-white">
          <div
            className="m-auto text-xs"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes />
          </div>
        </div>
      </div>

      <ul className="flex flex-col text-white font-medium border-t border-blueColor">
        {header?.headerMenuItems.map((item) => (
          <li key={item.ID} className="text-base px-6 py-2">
            <Link
              href={
                item.pageSlug.indexOf("-") === -1
                  ? `/${item.pageSlug}`
                  : `/${item.pageSlug.slice(0, item.pageSlug.indexOf("-"))}`
              }
            >
              {item.title}
            </Link>
            {item.children.length ? (
              <ul className="flex flex-col ml-5 text-white font-medium list-disc">
                {item.children.map((child) => (
                  <li key={child.ID} className="text-sm px-6 py-2">
                    <Link href={`/page/${child.pageSlug}`}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

MobileMenu.propTypes = {
  showMobileMenu: PropTypes.bool.isRequired,
  setShowMobileMenu: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
};

export default MobileMenu;
