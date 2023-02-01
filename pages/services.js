import PopularBanner from "../components/Common/PopularBanner";
import Layout from "../Layouts";
import {
  getHeaderAndFooter,
  getHomeData,
  getListMenuById,
  gettPageDataBySlug,
} from "./api/axios";
import parser from "html-react-parser";
import { FaAccusoft } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../redux/Slice/langSlice";

const Services = ({
  headerVI,
  footerVI,
  headerEN,
  footerEN,
  dataVI,
  dataEN,
  partner,
  listMenuVI,
  listMenuEN,
}) => {
  const [header, setHeader] = useState();
  const [footer, setFooter] = useState();
  const [listMenu, setListMenu] = useState(listMenuVI);
  const [data, setData] = useState(dataVI);
  const lang = useSelector(langSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (lang) {
      case "vi":
        setHeader(headerVI);
        setFooter(footerVI);
        setData(dataVI);
        setListMenu(listMenuVI);
        break;
      case "en":
        setHeader(headerEN);
        setFooter(footerEN);
        setData(dataEN);
        setListMenu(listMenuEN);

        break;
      default:
        setHeader(headerVI);
        setFooter(footerVI);
        setData(dataVI);
        setListMenu(listMenuVI);
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
        imageUrl={data.acf.layout_banner?.url}
        title={data.title.rendered}
      />

      <div className="max-w-[1200px] px-4 py-16 m-auto bg-white">
        <h3 className="text-3xl lg:text-4xl font-medium mt-6 mb-10">
          {data.title.rendered}
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          {data.acf?.image_layout &&
            data.acf?.image_layout?.map((item) => (
              <div className="w-full lg:flex-1 mb-10" key={item.image_item.ID}>
                <img
                  className="w-full h-[250px] object-cover"
                  src={item.image_item?.url}
                />
              </div>
            ))}
        </div>
        <div className="text-sm">{parser(data.content.rendered)}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {listMenu.reverse().map((item) => (
            <div className="flex-1 group hover:cursor-pointer border border-[#d3d3d3] p-4">
              {item._embedded.hasOwnProperty("wp:featuredmedia") ? (
                <img
                  className="w-full h-40 object-cover"
                  src={item._embedded["wp:featuredmedia"][0].source_url}
                  alt=""
                />
              ) : (
                <div className="mb-3 h-40 bg-blueColor flex group-hover:bg-greenColor duration-300 ">
                  <div className="m-auto text-4xl text-greenColor group-hover:text-white">
                    <FaAccusoft />
                  </div>
                </div>
              )}

              <div className="p-10 flex flex-col justify-between">
                <h3 className="text-sm font-bold text-center group-hover:text-primary">
                  <Link href={`/page/${item.slug}`}>{item.title.rendered}</Link>
                </h3>
              </div>
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
  const data = await gettPageDataBySlug("services");
  const dataEN = await gettPageDataBySlug("services-en");
  const partner = await getHomeData();
  const listMenuVI = await getListMenuById(data[0].id);
  const listMenuEN = await getListMenuById(dataEN[0].id);

  return {
    props: {
      headerVI: res.data.header,
      footerVI: res.data.footer,
      headerEN: resEN.data.header,
      footerEN: resEN.data.footer,
      dataVI: data[0],
      dataEN: dataEN[0],
      listMenuVI,
      listMenuEN,
      partner,
    },
    revalidate: 10,
  };
};

export default Services;
