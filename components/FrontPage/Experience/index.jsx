import Image from "next/image";
import { useSelector } from "react-redux";
import { aboutImg } from "../../../assets/image";
import { langSelector } from "../../../redux/Slice/langSlice";
import Button from "../../Common/Button";

const Experience = () => {
  const lang = useSelector(langSelector);
  return (
    <div className="bg-blueColor pb-32 lg:pb-64">
      <div className="max-w-[1200px] m-auto flex flex-col lg:flex-row items-center gap-8 px-4 lg:px-0">
        <div className="relative flex justify-end w-full lg:w-1/2">
          <Image src={aboutImg} alt="" />
        </div>

        <div className="flex-1 my-auto">
          <h1 className="block text-4xl lg:text-4xl mt-3 mb-5 font-bold text-subMenuColor">
            {lang === "vi" ? "Về TSG" : "About TSG"}
          </h1>
          <p className="text-sm text-subMenuColor">
            {lang === "vi"
              ? "TSG hiện có gần 2000 thành viên gồm đội ngũ cán bộ chỉ huy cao cấp và lực lượng sĩ quan bảo vệ - vệ sĩ được bồi dưỡng về pháp luật, nghiệp vụ chuyên môn, nghiệp vụ giao tiếp đang làm nhiệm vụ tại các dự án trên khắp Việt Nam."
              : "The company currently has nearly 2,000 members, including senior commanders and security officers - bodyguards who have received basic law, professional, and communication training and are on duty at various agencies across the country."}
          </p>

          <div className="flex flex-col lg:flex-row justify-between mt-3">
            <ul className="text-subMenuColor list-disc pl-7 mb-5 lg:mb-0">
              <li className="mt-3 text-sm">
                {lang === "vi" ? "Chính trực và đạo đức" : "Integrity & Ethics"}
              </li>
              <li className="mt-3 text-sm">
                {lang === "vi" ? "Sẵn sàng 24/7" : "24/7 dispatch"}
              </li>
              <li className="mt-3 text-sm">
                {lang === "vi"
                  ? "Dịch vụ hỗ trợ chuyên dụng"
                  : "Dedicated support services"}
              </li>
            </ul>
            <ul className="text-subMenuColor list-disc pl-7">
              <li className="mt-3 text-sm">
                {lang === "vi" ? "Trang thiết bị hiện đại" : "Fully equipped"}
              </li>
              <li className="mt-3 text-sm">
                {lang === "vi"
                  ? "Đánh giá và tư vấn rủi ro kỹ lưỡng"
                  : "Thorough risk assessment and advice"}
              </li>
              <li className="mt-3 text-sm">
                {lang === "vi"
                  ? "Kiến thức chi tiết về từng khu vực"
                  : "Detailed local knowledge"}
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Button
              href={
                lang === "vi"
                  ? "https://drive.google.com/file/d/1U_Viee3i8CqMZf7AEeilpZuvTBYu0iaJ/view"
                  : "https://drive.google.com/file/d/12jZQf0voqaGPfnqWsRYZf60gJn7tkxDx/view"
              }
              value="DOWNLOAD BROCHURE"
              download={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
