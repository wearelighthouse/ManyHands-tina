import React from "react";
import Head from "next/head";
import layoutData from "../../content/global/index.json";

export const Layout = ({ data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>Tina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      {children}
    </>
  );
};
