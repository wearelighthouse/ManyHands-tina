import React from "react";
import Head from "next/head";
import Script from "next/script";
import layoutData from "../../content/global/index.json";

const prefix = process.env.prefix ?? '';
const GTM_ID = "GTM-TGNB6QB";

/* Disable no-unused-vars because tina's files send things to the currently unused data property */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export const Layout = ({ data = layoutData, rawData = null, children }) => {
  return (
    <>
      <Head>
        <title>ManyHands: The creative, collaborative event for product people 🤘</title>
        <meta name="description" content="Network with likeminded pros, explore fun product challenges, and join our community of experts." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <link rel="apple-touch-icon" sizes="180x180" href={`${prefix}/assets/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${prefix}/assets/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${prefix}/assets/favicon-16x16.png`} />

        <meta property="og:image" content={`${prefix}/assets/manyhands-preview.png`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="538" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      {children}
    </>
  );
};
