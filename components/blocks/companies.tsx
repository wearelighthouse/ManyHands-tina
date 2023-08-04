import React from "react";
import type { Template } from "tinacms";

export const Companies = ({ data }) => (
  <section className="tablet:m-4">
    <div className="max-w-5xl mx-auto text-center px-12 my-20">
      {data.logos && (
        <div className="grid gap-x-14 gap-y-8 desktop:gap-y-12 mobile:flex flex-wrap justify-items-center justify-center items-center my-14">
          {data.logos.filter((logo) => logo?.src).map((logo, index: number) => (
            <img
              loading="lazy"
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? null}
              height={logo.height ?? null}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export const companiesBlockSchema: Template = {
  name: "companies",
  label: "Company Logos",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      logos: [],
    },
  },
  fields: [
    {
      type: "object",
      label: "Company Logos",
      name: "logos",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.alt ?? 'Company Logo',
        }),
      },
      fields: [
        {
          name: "src",
          label: "Logo Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Logo Alt Text",
          type: "string",
        },
        {
          name: "width",
          label: "Width (px)",
          type: "number",
        },
        {
          name: "height",
          label: "Height (px)",
          type: "number",
        },
        {
          name: "link",
          label: "Link / URL",
          type: "string",
        },
      ],
    },
  ],
};
