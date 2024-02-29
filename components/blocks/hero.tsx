import * as React from "react";
import type { Template } from "tinacms";
import Link from "next/link";
import { Icon, iconSchema } from "../util/icon";
import DppLogoSvg from "../../assets/img/dpp-logo.svg";

const prefix = process.env.prefix ?? '';

export const Hero = ({ data, parentField }) => (
  <div className="bg-mimosa px-6 pt-14 tablet:px-16 pb-20 desktop:pb-24 o-section-clip--ramp-bottom-right tablet:m-4 text-center">
    <Link href={`${prefix}/`}>
      <a
        aria-label="Home"
        className="inline-flex hover:bg-white/100 -m-2 p-2 rounded transition duration-300"
      >
        <img src={`${prefix}/assets/manyhands-logo.svg`} alt="Many Hands" width="188" height="34"/>
      </a>
    </Link>

    <h1
      data-tinafield={`${parentField}.heading`}
      className="h1 mx-auto max-w-[22rem] tablet:max-w-2xl mt-8 mb-6"
    >
      {data.heading}
    </h1>

    <div className="flex justify-center gap-14">
      <div className="hidden tablet:block relative self-center border-8 desktop:border-10 border-white rounded-3xl mb-[4%] rotate-[-15deg]">
        {data.imageLeft && (
          <img
            className="rounded-2xl"
            width="267"
            height="267"
            alt={data.imageLeft.alt ?? ""}
            src={data.imageLeft.src}
            // TODO: Can grab image width and height?
          />
        )}
        {data.iconLeft && (
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 rotate-[15deg]">
            <Icon
              tinaField={`${parentField}.iconLeft`}
              className="w-24 h-24 max-w-[42px] desktop:max-w-[82px] translate-y-[-6px]"
              data={{ icon: data.iconLeft }}
            />
          </div>
        )}
      </div>

      <div className="w-full max-w-[20rem] tablet:max-w-[39rem] tablet:basis-3/4 tablet:mt-4">
        {data.subtitle && (
          <p
            data-tinafield={`${parentField}.subtitle`}
            className="text-xg tablet:text-xl desktop:text-2xl"
          >
            {data.subtitle}
          </p>
        )}

        <div className="mt-4 tablet:mt-8 flex flex-wrap gap-x-6 gap-y-1 justify-center">
          <a
            href="https://wearedpp.com/"
            rel="noopener"
            className="inline-flex hover:bg-white/100 -m-2 p-2 rounded transition duration-300"
          >
            <DppLogoSvg
              aria-label="by Digital Product People"
            />
          </a>
        </div>
      </div>

      <div className="hidden tablet:block relative self-center border-8 desktop:border-10 border-white rounded-3xl mb-[4%] rotate-[15deg]">
        {data.imageRight && (
          <img
            className="rounded-2xl"
            width="267"
            height="267"
            alt={data.imageRight.alt ?? ""}
            src={data.imageRight.src}
          />
        )}
        {data.iconRight && (
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-[-15deg]">
            <Icon
              tinaField={`${parentField}.iconLeft`}
              className="w-24 h-24 max-w-[40px] desktop:max-w-[80px] translate-y-[-6px]"
              data={{ icon: data.iconRight }}
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "The problem solving event for product people",
      subtitle: "We’re building a community of UX leaders with a passion for helping solve real-world product issues.",
      iconLeft: "tina",
      iconRight: "tina",
    },
  },
  fields: [
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
    {
      type: "object",
      label: "Image Left",
      name: "imageLeft",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      ...iconSchema,
      label: "Icon Left",
      name: "iconLeft"
    },
    {
      type: "object",
      label: "Image Right",
      name: "imageRight",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      ...iconSchema,
      label: "Icon Right",
      name: "iconRight"
    },
  ],
};
