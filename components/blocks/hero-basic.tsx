import * as React from "react";
import type { Template } from "tinacms";
import { backgroundColorSchema } from "../util/background-color";

const prefix = process.env.prefix ?? '';

export const BasicHero = ({ data, parentField }) => (
  <div
  data-tinafield={`${parentField}.background`}
    className={`px-6 pt-14 tablet:px-16 ${data.background ? 'o-section-clip--ramp-bottom-right pb-20 desktop:pb-24' : ''} tablet:m-4 text-center ${data.background ?? ''}`}
  >
    <a
      href={`${prefix}/`}
      aria-label="Home"
      className={`inline-flex ${data.background ? 'hover:bg-white/100' : 'hover:bg-mimosa/100'} -m-2 p-2 rounded transition duration-300`}
    >
      <img className="" src={`${prefix}/assets/manyhands-logo.svg`} alt="Many Hands" width="188" height="34"/>
    </a>

    <h1
      data-tinafield={`${parentField}.heading`}
      className="h2 mx-auto tablet:max-w-2xl mt-12 mb-6"
    >
      {data.heading}
    </h1>

    {data.subtitle && (
      <p
        data-tinafield={`${parentField}.subtitle`}
        className="text-xl tablet:text-2xl mx-auto tablet:max-w-2xl mt-10 mb-6"
      >
        {data.subtitle}
      </p>
    )}
  </div>
);

export const basicHeroBlockSchema: Template = {
  name: "basicHero",
  label: "Basic Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Bring ManyHands to your team",
      subtitle: "Harness the power of creativity with our workshops for corporate teams based on our highly rated public events.",
    },
  },
  fields: [
    backgroundColorSchema,
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle",
    },
  ],
};
