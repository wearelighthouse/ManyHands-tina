import React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";

export const Content = ({ data, parentField = "" }) => {
  return (
    <section
      className="py-16 flex"
      data-tinafield={`${parentField}.body`}
    >
      <TinaMarkdown content={data.body} />
    </section>
  );
};

export const contentBlockSchema: TinaTemplate = {
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
    },
  ],
};
