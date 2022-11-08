import React from "react";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

const components: Components<{
  Center: {
    children: TinaMarkdownContent;
  };
}> = {
  Center: (props) => (
    <div className="text-center mx-auto">
      <TinaMarkdown content={props.children} />
    </div>
  ),
};

export const Content = ({ data, parentField = "" }) => {
  return (
    <section
      className="py-16 flex content"
      data-tinafield={`${parentField}.body`}
    >
      <TinaMarkdown components={components} content={data.body} />
    </section>
  );
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
            },
          ],
        },
      ],
    },
  ],
};
