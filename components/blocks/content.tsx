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

const components: Components<{
  Center: {
    children: TinaMarkdownContent;
  };
  Cta: {
    href: string;
    text: string;
  }
}> = {
  Center,
  Cta,
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

export const contentBlockSchema: Template = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
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
              templates: [
                ctaSchema,
              ],
            },
          ],
        },
        ctaSchema,
      ],
    },
  ],
};
