import React from "react";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import { backgroundColorSchema } from "../util/background-color";

const Cta = (props) => (
  <a href={props.href} className="button !px-6 text-lg h-14 mx-auto">
    {props.text}
  </a>
);

const Center = (props) => (
  <div className="text-center">
    <TinaMarkdown components={components} content={props.children} />
  </div>
);

const DescriptionList = (props) => (
  <dl className="text-xl tablet:text-2xl grid gap-10 !my-16">
    {props.items?.map((item, itemIndex) => (
      <div key={itemIndex} className="flex flex-wrap max-tablet:flex-col gap-x-12 gap-y-2">
        <dt className="font-medium w-48 mr-4">{item.term}</dt>
        {item.details?.map((detail, detailIndex) => (
          <dd key={detailIndex} className="flex items-center gap-3 col-start-2">
            {item.iconSrc && (
              <img src={item.iconSrc} loading="lazy" width="40" height="40" alt="" />
            )}
            {detail.text}
          </dd>
        ))}
      </div>
    ))}
  </dl>
);

const components: Components<{
  Center: {
    children: TinaMarkdownContent;
  };
  Cta: {
    href: string;
    text: string;
  };
  DescriptionList: {
    items: {
      term: string;
      iconSrc: any;
      details: string[];
    }[];
  };
}> = {
  Center,
  Cta,
  DescriptionList,
};

export const Content = ({ data, parentField = "" }) => {
  return (
    <section
      className={`tablet:mx-4 ${data.background ? 'py-20' : 'my-20 tablet:my-24'} px-6 tablet:px-16 content content-em-ul [&>*]:max-w-4xl [&>*]:mx-auto ${data.background ?? ''}`}
      data-tinafield={`${parentField}.body`}
    >
      <TinaMarkdown components={components} content={data.body} />
    </section>
  );
};

const descriptionListSchema: Template = {
  name: "DescriptionList",
  label: "Description List",
  fields: [
    {
      type: "object",
      label: "Description List Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.term || 'Description List Item',
        }),
      },
      fields: [
        {
          type: "string",
          label: "Term",
          name: "term",
        },
        {
          name: "iconSrc",
          label: "Detail Icon",
          type: "image",
        },
        {
          type: "object",
          label: "Details",
          name: "details",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.text || 'Description List Detail',
            }),
          },
          fields: [
            {
              type: "string",
              label: "Text",
              name: "text",
            },
          ],
        },
      ],
    },
  ],
};

const ctaSchema: Template = {
  name: "Cta",
  label: "CTA",
  fields: [
    {
      name: "href",
      label: "href",
      type: "string",
    },
    {
      name: "text",
      label: "text",
      type: "string",
    },
  ],
};

function findContentHeading(body) {
  const characterLimit = 80;
  let foundHeading: string | null;

  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ['h1', 'h2', 'h3'].includes(nestedValue.type)) {
      foundHeading = nestedValue.children?.[0].text;
    }

    return nestedValue;
  });

  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ['p'].includes(nestedValue.type)) {
      foundHeading = nestedValue.children?.[0].text;
    }

    return nestedValue;
  });

  return foundHeading?.slice(0, characterLimit);
}

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    itemProps: (value) => {
      const topLevelHeading = findContentHeading(value.body);

      return ({
        label: topLevelHeading ? `Content - ${topLevelHeading}` : 'Content',
      });
    },
    defaultItem: () => {
      return {
        body: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Default Text',
                },
              ],
            },
          ],
        },
      }
    },
  },
  fields: [
    backgroundColorSchema,
    {
      type: "rich-text",
      parser: {
        type: 'mdx',
      },
      label: "Body",
      name: "body",
      templates: [
        {
          name: "Center",
          label: "Center",
          fields: [
            {
              name: "children",
              label: "Children",
              type: "rich-text",
              parser: {
                type: 'mdx',
              },
              templates: [
                ctaSchema,
              ],
            },
          ],
        },
        ctaSchema,
        descriptionListSchema,
      ],
    },
  ],
};
