import Link from "next/link";
import FooterSlider from "../Common/FooterSlider";

import PropTypes from "prop-types";
import { useCurrentViewport } from "../../hooks/useCurrentViewprot";
import { useSelector } from "react-redux";
import { langSelector } from "../../redux/Slice/langSlice";

const Footer = ({ footer, partner }) => {
  const lang = useSelector(langSelector);
  const { isMobile } = useCurrentViewport();
  return (
    <div>
      <div className="w-full bg-white py-6">
        <div className="max-w-[1200px] flex m-auto px-4 overflow-hidden">
          {partner && (
            <FooterSlider data={partner} perPage={isMobile ? 1 : 6} />
          )}
        </div>
      </div>

      <div className="pt-[100px] bg-subMenuColor">
        <div className="pb-[120px]">
          <div className="max-w-[1200px] m-auto flex flex-col lg:flex-row px-4 gap-10">
            <div className="w-full lg:w-[40%]">
              <h3 className="text-sm text-white font-medium text-left min-h-[70px]">
                {lang === "vi"
                  ? "CÔNG TY TNHH KINH DOANH DỊCH VỤ BẢO VỆ TSG VIỆT NAM"
                  : "TSG VIET NAM SECURITY SERVICE BUSINESS COMPANY LIMITED"}
              </h3>
              <p className="text-xs text-white opacity-75 py-[5px]">
                {lang === "vi"
                  ? "Từ năm 2013, Công ty TNHH Kinh doanh dịch vụ Bảo Vệ TSG Việt Nam được thành lập do nguồn vốn Hàn Quốc đầu tư chuyên về lĩnh vực Bảo Vệ - Vệ sĩ tại Việt Nam với gần 2000 thành viên."
                  : "TSG Vietnam Security Service Trading Co., Ltd was founded in 2013 as a result of an investment on security – bodyguard from Korea with nearly 2,000 members."}
              </p>
            </div>
            <div className="flex-1">
              <div className=" text-sm text-white font-medium min-h-[70px]">
                {lang === "vi" ? "Dịch vụ cung cấp" : "Our services "}
              </div>
              <ul>
                {footer?.footerMenuItems
                  ? footer.footerMenuItems?.map((item) => (
                      <li
                        key={item.ID}
                        className="py-[5px] text-xs text-white opacity-75 cursor-pointer flex items-center gap-3"
                      >
                        <span className="inline-block w-1 h-1 bg-white rounded-[50%]"></span>
                        <Link href={`/page/${item.pageSlug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))
                  : ""}
              </ul>
            </div>

            <div className="flex-1">
              <div className="text-sm text-white font-medium min-h-[70px]">
                {lang === "vi" ? "Liên hệ" : "Contact"}
              </div>
              <ul>
                <li className="flex gap-1 w-full my-[5px] text-sm text-white opacity-75">
                  <div className="w-1/4 text-xs">
                    <p>{lang === "vi" ? "Hà Nội:" : "Ha Noi:"}</p>
                  </div>{" "}
                  <p className="flex-1 text-xs flex flex-col">
                    <span>
                      {lang === "vi"
                        ? "BT M04-L15, khu đô thị mới Dương Nội, Phường La Khê, Quận Hà Đông"
                        : "BT M04-L15, Duong Noi New Urban Area, La Khe ward, Ha Dong district"}
                    </span>
                    <span>
                      {lang === "vi"
                        ? "Điện thoại: 024.6666.1099"
                        : "Tel: 024.6666.1099"}
                    </span>
                  </p>
                </li>
                <li className="flex gap-1 w-full my-[5px] text-sm text-white opacity-75">
                  <div className="w-1/4 text-xs">
                    <p>{lang === "vi" ? "Hồ Chí Minh:" : "Ho Chi Minh:"}</p>
                  </div>{" "}
                  <p className="flex-1 flex flex-col text-xs">
                    <span>
                      {lang === "vi"
                        ? "958/31 Đường Âu Cơ, Phường 14, Quận Tân Bình"
                        : "958/31 Au Co Road, Ward 14, Tan Binh district"}
                    </span>
                    <span>
                      {lang === "vi"
                        ? "Điện thoại: 0826.383.777 - 0914.328.678"
                        : "Tel: 0826.383.777 - 0914.328.678"}
                    </span>
                  </p>
                </li>
                <li className="flex my-[5px] gap-1 text-sm text-white opacity-75">
                  <div className="w-1/4 text-xs">
                    <p>{lang === "vi" ? "Đà Nẵng:" : "Da Nang:"}</p>
                  </div>{" "}
                  <p className="flex-1 flex flex-col text-xs">
                    <span>
                      {lang === "vi"
                        ? "36 Trần Quốc Toản, Phường Hải Châu 1, Quận Hải Châu"
                        : "Da Nang: 36 Tran Quoc Toan street, Hai Chau district"}
                    </span>
                    <span>Tel: 0868.050.510</span>
                  </p>
                </li>
                <li className="my-[5px] flex gap-1 items-center text-sm text-white opacity-75">
                  <div className="w-1/4 text-xs">
                    <p>Email:</p>
                  </div>{" "}
                  <a
                    className=" flex-1 text-xs"
                    href="mailto:Congtybaovetsg@gmail.com"
                  >
                    Congtybaovetsg@gmail.com
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-sm text-center text-white opacity-75 py-4">
          2022 TSG - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  footer: PropTypes.object,
  partner: PropTypes.array,
};

export default Footer;
