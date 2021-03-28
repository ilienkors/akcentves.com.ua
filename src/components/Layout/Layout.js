import React from "react";

import Footer from "./Footer";

import "normalize.css";
import "~styles/global.scss";

const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
