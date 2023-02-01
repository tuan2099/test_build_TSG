import Head from "next/head";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Header from "../components/Header";
import parse from "html-react-parser";

const Layout = ({
  children,
  header,
  footer,
  partner,

  seo,
}) => {
  const [dropMenu, setDropMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDropMenu(window.scrollY >= 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Head>{parse(seo)}</Head>
      <Header dropMenu={dropMenu} header={header} />

      <main>{children}</main>
      <Footer footer={footer} partner={partner} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
  header: PropTypes.object.isRequired,
  footer: PropTypes.object.isRequired,
  partner: PropTypes.array,
  title: PropTypes.string,
  seo: PropTypes.object,
  seoMarkup: PropTypes.func,
};

export default Layout;
