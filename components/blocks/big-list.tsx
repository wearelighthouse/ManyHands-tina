import React from "react";
import type { Template } from "tinacms";

export const BigList = ({ data, parentField = "" }) => (
  <div className="my-20 tablet:my-24 px-6 flex grid gap-16">
    {data.heading && data.heading !== '' && (
      <h2
        className="mx-auto text-4xl font-tiempos font-semibold"
        data-tinafield={`${parentField}.heading`}
      >
        {data.heading}
      </h2>
    )}

    {data.items && (
      <dl className="mx-auto my-8 max-w-2xl text-xl tablet:text-2xl grid gap-10 tablet:gap-12 circle-bg-dl">
        {data.items.map((item, index: number) => (
          <div key={index}>
            <dt className="font-medium">
              <span className="indicator">{item.indicator ?? index + 1}</span>
              <span className="sr-only whitespace-pre">{' '}</span>
              {item.title}
            </dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    )}
  </div>
);

export const bigListBlockSchema: Template = {
  name: "bigList",
  label: "Big List",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {},
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "List Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: (item?.indicator ? `${item?.indicator} ` : '') + item?.title ?? 'Item',
        }),
      },
      fields: [
        {
          name: "indicator",
          label: "Indicator",
          type: "string",
        },
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
        },
      ],
    },
  ],
};
