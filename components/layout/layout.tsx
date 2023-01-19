import React from "react";
import Head from "next/head";
import layoutData from "../../content/global/index.json";

const prefix = process.env.prefix ?? '';

/* Disable no-unused-vars because tina's files send things to the currently unused data property */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const Layout = ({ data = layoutData, rawData = null, children }) => {
  return (
    <>
      <Head>
        <title>ManyHands: The problem solving event for product people 🤘</title>
        <meta name="description" content="A collaborative problem solving event for product pros. Work together on real-world UX problems online." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="apple-touch-icon" sizes="180x180" href={`${prefix}/assets/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}/assets/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${prefix}/assets/favicon-16x16.png`} />

        <meta property="og:image" content={`${prefix}/assets/manyhands-preview.png`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="538" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      {children}
    </>
  );
};
