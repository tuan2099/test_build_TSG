import PopularBanner from "../components/Common/PopularBanner";
import Layout from "../Layouts";
import {
  getHeaderAndFooter,
  getHomeData,
  gettPageDataBySlug,
} from "./api/axios";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../redux/Slice/langSlice";

const Device = ({
  headerVI,
  footerVI,
  headerEN,
  footerEN,
  dataVI,
  dataEN,
  partner,
}) => {
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();
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
      partner={partner.acf.partner}
      title={data.title.rendered}
      seo={data.yoast_head}
    >
      <PopularBanner
        imageUrl={data.acf?.layout_banner?.url}
        title={data.title.rendered}
      />

      <div className="max-w-[1200px] px-4 py-16 m-auto bg-white">
        <h3 className="text-3xl lg:text-4xl font-medium mt-6 mb-10">
          {data.title.rendered}
        </h3>
        <div className="flex flex-col">
          {data.acf?.image_layout.map((item) => (
            <img
              key={item.image_item.ID}
              className="w-full object-cover mb-5"
              src={item.image_item.url}
              alt=""
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await getHeaderAndFooter("vi");
  const resEN = await getHeaderAndFooter("en");
  const data = await gettPageDataBySlug("device");
  const dataEN = await gettPageDataBySlug("device-en");
  const partner = await getHomeData();

  return {
    props: {
      headerVI: res.data.header,
      footerVI: res.data.footer,
      headerEN: resEN.data.header,
      footerEN: resEN.data.footer,
      dataVI: data[0],
      dataEN: dataEN[0],
      partner,
    },
    revalidate: 10,
  };
};

export default Device;
