import * as React from "react";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import LhBackgroundGradientSvg from "../../assets/img/lh-background-gradient.svg";
import LighthouseLogoSvg from "../../assets/img/lighthouse-logo.svg";
import ClutchSvg from "../../assets/img/clutch.svg";

const prefix = process.env.prefix ?? '';

export const BroughtToYouBy = ({ data, parentField }) => {
  return (
    <section className="relative px-6 py-16 tablet:py-20 tablet:px-16 tablet:m-4 text-white flex flex-wrap gap-24 desktop:gap-x-48 items-center">
      <div className="max-w-2xl">
        <LhBackgroundGradientSvg
          className="absolute top-0 left-0 w-full h-full -z-10"
          aria-hidden="true"
        />

        <h2>
          <div className="mb-4 text-md">Brought to you by</div>

          <a
            href="https://wearelighthouse.com/"
            rel="noopener"
            className="inline-flex hover:bg-white/10 -m-2 p-2 rounded transition duration-300"
          >
            <LighthouseLogoSvg
              aria-label="Lighthouse"
            />
          </a>
        </h2>

        <hr className="w-14 border-t-2 my-8"/>

        <div
          className="mb-6 font-medium text-3.5xl mobile:text-4xl tablet:text-5xl leading-tight [&>p>strong]:text-smoke [&>p>strong]:font-medium"
          data-tinafield={`${parentField}.largeText`}
        >
          <TinaMarkdown content={data.largeText} />
        </div>

        <a
          href="https://wearelighthouse.com/"
          rel="noopener"
          className="inline-flex gap-1 items-center text-link text-xl hover:bg-white/10 -mx-2 px-2 py-1 rounded transition duration-300"
        >
          <span>wearelighthouse.com</span>
          <svg width="18px" height="15px" viewBox="0 0 12 10" className="arrow" aria-hidden="true">
            <path fill="none" stroke="currentColor" d="M1 5l8 0M6 2l3 3 l-3 3"/>
          </svg>
        </a>
      </div>

      <a
        href="https://clutch.co/profile/lighthouse-2"
        rel="noopener"
        className="hover:bg-white/10 -m-4 p-4 rounded transition duration-300"
      >
        <div>
          <ClutchSvg
            width="108"
            height="30"
            aria-label="Clutch"
          />

          <svg
            viewBox="0 0 204 36"
            width="102px"
            height="18px"
            role="img"
            aria-label="Five stars"
            className="text-mimosa mt-2"
          >
            <use href={`${prefix}/assets/star.svg#a`} x="0"></use>
            <use href={`${prefix}/assets/star.svg#a`} x="42"></use>
            <use href={`${prefix}/assets/star.svg#a`} x="84"></use>
            <use href={`${prefix}/assets/star.svg#a`} x="126"></use>
            <use href={`${prefix}/assets/star.svg#a`} x="168"></use>
          </svg>
        </div>

        <div className="grid gap-2 leading-tight mt-4">
          <p>Top 5 Global UX design agencies</p>
          <p>Highest rated UK UX design agency</p>
        </div>
      </a>
    </section>
  );
};

const defaultLargeText = {
  type: 'root',
  children: [
    {
      type: 'p',
      children: [
        {
          type: 'text',
          text: 'The ',
        },
        {
          type: 'text',
          bold: true,
          text: 'number one UX / UI design partner',
        },
        {
          type: 'text',
          text: ' for digital product teams',
        },
      ],
    },
  ],
};

export const broughtToYouByBlockSchema: Template = {
  name: "broughtToYouBy",
  label: "Brought to you by",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: () => ({
      largeText: defaultLargeText,
    }),
  },
  fields: [
    {
      label: "Heading",
      name: "largeText",
      type: "rich-text",
    },
  ],
};
