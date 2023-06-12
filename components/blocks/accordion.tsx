import React from "react";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import toKebabCase from "../util/to-kebab-case";
import { getRichTextItemLabel } from "../util/get-label";

export const Accordion = ({ data, parentField = "" }) => (
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
      <dl className="mx-auto my-8 max-w-2xl text-xl tablet:text-2xl grid gap-10 tablet:gap-12 w-full">
        {data.items.map((item, index: number) => (
          <details
            key={`${index}-${toKebabCase(getRichTextItemLabel(item.summary))}`}
            open={item.open}
            className="[&_svg]:open:rotate-180 [&_em]:text-dark-gray"
          >
            <summary
              data-tinafield={`${parentField}.items.${index}.summary`}
              className="flex font-medium bg-light-gray px-7 py-5 list-none"
            >
              <TinaMarkdown content={item.summary} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                aria-hidden="true"
                className="h-[1.5em] ml-auto transition-transform"
              >
                <path fill="none" stroke="currentColor" strokeWidth="2.5" d="m2 2 6 6 6-6"/>
              </svg>
            </summary>

            <div data-tinafield={`${parentField}.items.${index}.text`} className="pt-6 px-4 content">
              <TinaMarkdown content={item.text} />
            </div>
          </details>
        ))}
      </dl>
    )}
  </div>
);

export const accordionBlockSchema: Template = {
  name: "accordion",
  label: "Accordion",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Accordion Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (value) => ({
          label: getRichTextItemLabel(value.summary) || 'Item',
        }),
        defaultItem: {
          open: true,
        },
      },
      fields: [
        {
          name: "open",
          label: "Initially Open",
          type: "boolean",
        },
        {
          name: "summary",
          label: "Title",
          type: "rich-text",
          parser: {
            type: 'mdx',
          },
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text",
          parser: {
            type: 'mdx',
          },
        },
      ],
    },
  ],
};
