import Layout from "../Layouts";
import { useState, useEffect } from "react";
import StandardItem from "../components/FrontPage/StandardItem";
import Experience from "../components/FrontPage/Experience";
import OurMission from "../components/FrontPage/OurMission";
import Services from "../components/FrontPage/Services";
import Why from "../components/FrontPage/Why";
import Button from "../components/Common/Button";
import OurCustomer from "../components/FrontPage/OurCustomer";
import { getHeaderAndFooter, gettPageDataBySlug } from "./api/axios";
import BannerSlide from "../components/Common/Slider";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../redux/Slice/langSlice";
import Counter from "../components/FrontPage/Counter";

export default function Home({
  headerVI,
  footerVI,
  headerEN,
  footerEN,
  dataVI,
  dataEN,
}) {
  const [header, setHeader] = useState(headerVI);
  const [footer, setFooter] = useState(footerVI);
  const [data, setData] = useState(dataVI);
  const lang = useSelector(langSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (lang) {
      case "vi":
        setHeader(headerVI);
        setFooter(footerVI);
        setData(dataVI);
        break;
      case "en":
        setHeader(headerEN);
        setFooter(footerEN);
        setData(dataEN);
        break;
      default:
        setHeader(headerVI);
        setFooter(footerVI);
        setData(dataVI);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("lang")) {
        dispatch(langSlice.actions.setLang(localStorage.getItem("lang")));
      }
    }
  }, []);

  return (
    <Layout
      header={header}
      footer={footer}
      partner={data.acf?.partner}
      title={null}
      seo={data.yoast_head}
    >
      <BannerSlide data={data.acf?.banner} perPage={1} />
      <div className="bg-blueColor">
        <div className="max-w-[1200px] m-auto px-4 py-8 lg:py-0 lg:px-0 flex flex-col lg:flex-row justify-between gap-7 z-20">
          {data.acf?.commit.map((item, index) => (
            <StandardItem value={item} key={index} />
          ))}
        </div>
      </div>

      <Experience />
      <OurMission data={data.acf?.mission} />
      <Services />
      <Why data={data.acf?.why} />
      <Counter />
      <div className="bg-blueColor py-20">
        <div className="max-w-[1200px] px-4 m-auto text-center">
          <div className="flex items-center justify-center gap-3 text-3xl lg:text-3xl font-bold mt-3 mb-10">
            <span className="block w-10 h-[2px] bg-black"></span>
            <p>
              {lang === "vi"
                ? "Nghiệp vụ - Chứng chỉ"
                : "Professional training – Certification "}
            </p>
            <span className="block w-10 h-[2px] bg-black"></span>
          </div>
          <p className="text-sm mb-8">
            {lang === "vi"
              ? "Mọi nhân viên đều trải qua quá trình khám xét lý lịch nghiêm ngặt cả về hình sự và nhân thân trước khi được xem xét tuyển dụng."
              : "Before being considered for employment, all employees are subjected to thorough background checks, both criminal and personal."}
          </p>
          <Button
            value={lang === "vi" ? "Xem thêm" : "Read more"}
            href={lang === "vi" ? "/page/chung-chi" : "/page/certificate"}
          />
        </div>
      </div>
      <OurCustomer data={data.acf?.customer} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await getHeaderAndFooter("vi");
  const resEN = await getHeaderAndFooter("en");
  const dataVI = await gettPageDataBySlug("home");
  const dataEN = await gettPageDataBySlug("home-english");

  return {
    props: {
      headerVI: res.data.header,
      footerVI: res.data.footer,
      headerEN: resEN.data.header,
      footerEN: resEN.data.footer,
      dataVI: dataVI[0],
      dataEN: dataEN[0],
    },
    revalidate: 10,
  };
};
