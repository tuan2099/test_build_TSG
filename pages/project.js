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
import parse from "html-react-parser";

const Projects = ({
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
        <div className="">
          <div className="text-sm">{parse(data.content.rendered)}</div>
          <div key={data.id}>
            <img
              className="w-full h-full object-cover"
              src={
                data._embedded.hasOwnProperty("wp:featuredmedia")
                  ? data._embedded["wp:featuredmedia"][0].source_url
                  : ""
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await getHeaderAndFooter("vi");
  const resEN = await getHeaderAndFooter("en");
  const data = await gettPageDataBySlug("project");
  const dataEN = await gettPageDataBySlug("project-en");
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

export default Projects;
