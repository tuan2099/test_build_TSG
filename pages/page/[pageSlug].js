import { useState, useEffect } from "react";

import Link from "next/link";
import PopularBanner from "../../components/Common/PopularBanner";
import Layout from "../../Layouts";
import {
  getHeaderAndFooter,
  getHomeData,
  getListMenuById,
  getPageSlugs,
  gettPageDataBySlug,
} from "../api/axios";

import ErrorPage from "next/error";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { langSelector, langSlice } from "../../redux/Slice/langSlice";

const ChildrenPage = ({
  page,
  headerVI,
  footerVI,
  headerEN,
  footerEN,
  listMenu,
  partner,
}) => {
  const router = useRouter();
  if (!router.isFallback && !listMenu && !page) {
    return <ErrorPage statusCode={404} />;
  }

  const [header, setHeader] = useState(headerVI);
  const [footer, setFooter] = useState(footerVI);
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
      title={page.title.rendered}
      seo={page.yoast_head}
    >
      <PopularBanner
        imageUrl={page.acf.layout_banner?.url}
        title={page.title.rendered}
      />

      <div className="max-w-[1200px] px-4 py-16 lg:py-32 m-auto bg-white flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-1/3">
          <div className="px-10 py-8 bg-[#ebf0eb] list-disc">
            {listMenu?.map((item) => (
              <div
                key={item.id}
                className="pl-5 py-3 text-base hover:bg-greenColor group"
              >
                <div className="group-hover:pl-4 duration-300">
                  <li className=" text-subMenuColor group-hover:text-white ">
                    <Link
                      className="text-sm font-semibold"
                      href={`/page/${item.slug}`}
                      passHref
                    >
                      {item.title.rendered}
                    </Link>
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 lg:w-full">
          {/* <img
            className="w-full object-cover"
            src={
              page._embedded.hasOwnProperty("wp:featuredmedia")
                ? page._embedded["wp:featuredmedia"][0].source_url
                : ""
            }
            alt=""
          /> */}
          <h3 className="text-3xl lg:text-4xl font-medium mt-6 mb-10">
            {page.title.rendered}
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-5">
            {page.acf?.image_layout &&
              page.acf?.image_layout?.map((item) => (
                <div
                  className="w-full lg:flex-1 mb-10"
                  key={item.image_item.ID}
                >
                  <img
                    className="w-full h-[250px] object-cover"
                    src={item.image_item?.url}
                  />
                </div>
              ))}
          </div>
          <div className="text-sm">{parse(page.content.rendered)}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPageSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const page = await gettPageDataBySlug(params.pageSlug);
  const res = await getHeaderAndFooter("vi");
  const resEN = await getHeaderAndFooter("en");
  const listMenu = await getListMenuById(page[0].parent);
  const partner = await getHomeData();

  return {
    props: {
      page: page[0],
      headerVI: res.data.header,
      footerVI: res.data.footer,
      headerEN: resEN.data.header,
      footerEN: resEN.data.footer,
      listMenu,
      partner,
    },
    revalidate: 10,
  };
};

export default ChildrenPage;
