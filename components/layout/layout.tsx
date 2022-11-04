import React from "react";
import Head from "next/head";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";

export const Layout = ({ data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>Tina</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <div
        className="`min-h-screen flex flex-col"
      >
        <div className="flex-1 text-gray-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex flex-col">
          {children}
        </div>
        <Footer
          data={data?.footer}
        />
      </div>
    </>
  );
};
