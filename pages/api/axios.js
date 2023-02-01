import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_WP_API_URL;

export const getHeaderAndFooter = async (lang) => {
  try {
    const res = await axios.get(
      `/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer&lang=${lang}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const getAllPages = async () => {
  try {
    const pages = await axios.get("/wp-json/wp/v2/pages?per_page=100");
    return pages.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPageSlugs = async () => {
  const pages = await getAllPages();

  return pages.map((page) => ({
    params: {
      pageSlug: `${page.slug}`,
    },
  }));
};

export const getPageById = async (id) => {
  try {
    const res = await axios.get(
      `/wp-json/wp/v2/pages/${id}?_embed&acf_format=standard`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getListMenuById = async (id) => {
  try {
    const res = await axios.get(
      `/wp-json/wp/v2/pages?parent=${id}&acf_format=standard&_embed`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const gettPageDataBySlug = async (slug) => {
  try {
    const res = await axios.get(
      `/wp-json/wp/v2/pages?acf_format=standard&_embed&slug=${slug}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHomeData = async () => {
  try {
    const res = await axios.get(`/wp-json/wpse/v1/frontpage`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
