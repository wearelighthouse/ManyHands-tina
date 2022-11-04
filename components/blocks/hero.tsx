import * as React from "react";
import type { TinaTemplate } from "tinacms";

export const Hero = ({ data, parentField }) => (
  <div className="bg-mimosa px-6 pt-14 tablet:px-16 pb-20 desktop:pb-32 o-section-clip--ramp-bottom-right tablet:m-4 text-center">
    <a href="/" aria-label="Home">
      <img className="mx-auto" src="./assets/manyhands-logo.svg" alt="Many Hands" width="188px" height="34px"/>
    </a>

    <h1
      data-tinafield={`${parentField}.heading`}
      className="h1 mx-auto max-w-[22rem] tablet:max-w-lg mt-10 mb-6"
    >
      {data.heading}
    </h1>

    <div className="image-container flex justify-center items-center gap-14">
      <div className="hidden tablet:block relative border-8 desktop:border-10 border-white rounded-3xl rotate-[-15deg]">
        {data.imageLeft && (
          <img
            className="rounded-2xl"
            width="218px"
            height="149px"
            alt={data.imageLeft.alt}
            src={data.imageLeft.src}
            // TODO: Can grab image width and height?
          />
        )}
        {data.iconLeft && (
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 rotate-[15deg]">
            <img
              className="max-w-[42px] desktop:max-w-[82px] translate-y-[-6px]"
              alt={data.iconLeft.alt}
              src={data.iconLeft.src}
              width="82px"
              height="82px"
            />
          </div>
        )}
      </div>

      <div className="w-full max-w-[18rem] tablet:max-w-[38rem] tablet:basis-3/4">
        {data.subtitle && (
          <p
            data-tinafield={`${parentField}.subtitle`}
            className="text-xg tablet:text-xl desktop:text-2xl"
          >
            {data.subtitle}
          </p>
        )}

        <div className="relative hidden tablet:flex justify-center mt-8 desktop:mt-16">
          <img
            className="absolute top-[-15%] w-[25px] -translate-x-1/2 desktop:top-0 desktop:w-[37px]"
            src="assets/union.svg"
            alt=""
            width="42px"
            height="61px"
          />
          <img
            src="assets/vector-6.svg"
            alt=""
            width="609px"
            height="89px"
          />
        </div>
      </div>

      <div className="hidden tablet:block relative border-8 desktop:border-10 border-white rounded-3xl rotate-[15deg]">
        {data.imageRight && (
          <img
            className="rounded-2xl"
            width="218px"
            height="149px"
            alt={data.imageRight.alt}
            src={data.imageRight.src}
            // TODO: Can grab image width and height?
          />
        )}
        {data.iconRight && (
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 rotate-[-15deg]">
            <img
              className="tablet:max-w-[40px] desktop:max-w-[80px] translate-y-[-6px]"
              alt={data.iconRight.alt}
              src={data.iconRight.src}
              width="80px"
              height="80px"
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

export const heroBlockSchema: TinaTemplate = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "The problem solving event for product people",
      subtitle: "We’re building a community of UX leaders with a passion for helping solve real-world product issues.",
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
      type: "object",
      label: "Icon Left",
      name: "iconLeft",
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
      type: "object",
      label: "Icon Right",
      name: "iconRight",
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
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
