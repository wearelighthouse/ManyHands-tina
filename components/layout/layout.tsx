import React from "react";
import Head from "next/head";
import layoutData from "../../content/global/index.json";

/* Disable no-unused-vars because tina's files send things to the currently unused data property */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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
