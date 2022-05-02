import React from "react";
import Head from "next/head";
import NavBar from "@components/NavBar";

const Layout = ({ title, showNavbar = true, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Uploader App"}</title>
      </Head>
      {showNavbar && <NavBar />}
      {children}
    </>
  );
};

export default Layout;
