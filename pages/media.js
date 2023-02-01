import { useState, useEffect } from "react";
import PopularBanner from "../components/Common/PopularBanner";
import VideoPlayer from "../components/VideoPlayer";
import Layout from "../Layouts";
import {
  getHeaderAndFooter,
  getHomeData,
  gettPageDataBySlug,
} from "./api/axios";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../redux/Slice/langSlice";

const Projects = ({
  headerVI,
  footerVI,
  headerEN,
  footerEN,
  media,
  partner,
}) => {
  const [width, setWidth] = useState();
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();

  const lang = useSelector(langSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (lang) {
      case "vi":
        setHeader(headerVI);
        setFooter(footerVI);

        break;
      case "en":
        setHeader(headerEN);
        setFooter(footerEN);

        break;
      default:
        setHeader(headerVI);
        setFooter(footerVI);
    }
  }, [lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (typeof width !== "undefined") {
        window.addEventListener("resize", () => {
          setWidth(window.innerWidth);
        });
      } else {
        setWidth(window.innerWidth);
      }
    }

    return () =>
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
  }, []);

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
      title={media[0].title.rendered}
      seo={media[0].yoast_head}
    >
      <PopularBanner
        imageUrl={media[0].acf?.layout_banner?.url}
        title={media[0].title.rendered}
      />
      <div className="max-w-[1200px] px-4 py-16 m-auto bg-white">
        <div className="max-w-[800px] m-auto">
          {media[0].acf?.video_list &&
            media[0].acf?.video_list.map((item, index) => (
              <div key={index} className="mb-10">
                <VideoPlayer
                  videoUrl={item.link}
                  width={width > 800 ? 800 : width - 32}
                />
              </div>
            ))}
        </div>
        <div className="max-w-[800px] m-auto">
          {media[0].acf?.youtube &&
            media[0].acf?.youtube.map((item, index) => (
              <div key={index} className="mb-10">
                <iframe
                  width={width > 800 ? 800 : width - 32}
                  height={
                    width > 800 ? (768 / 16) * 9 : ((width - 32) * 9) / 16
                  }
                  src={`https://www.youtube.com/embed/${item.key}`}
                ></iframe>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await getHeaderAndFooter("vi");
  const resEN = await getHeaderAndFooter("en");
  const media = await gettPageDataBySlug("media");
  const partner = await getHomeData();

  return {
    props: {
      headerVI: res.data.header,
      footerVI: res.data.footer,
      headerEN: resEN.data.header,
      footerEN: resEN.data.footer,
      media,
      partner,
    },
    revalidate: 10,
  };
};

export default Projects;
