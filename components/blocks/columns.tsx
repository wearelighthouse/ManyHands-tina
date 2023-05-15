import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Icon, iconSchema } from "../util/icon";
import toKebabCase from "../util/to-kebab-case";
import { backgroundColorSchema } from "../util/background-color";

export const ColumnsItem = ({ data, tinaField }) => (
  <div className="max-w-2xs" data-tinaField={tinaField}>
    <div
      className={`inline-block p-2 tablet:p-2.5 rounded-full ${data.background ?? ''}`}
      data-tinafield={`${tinaField}.background`}
    >
      {data.icon && (
        <Icon
          tinaField={`${tinaField}.icon`}
          data={{ icon: data.icon }}
          className="w-auto h-20 tablet:h-24"
        />
      )}
    </div>
    {data.title && (
      <h3
        data-tinafield={`${tinaField}.title`}
        className="font-medium mt-1 mb-1"
      >
        {data.title}
      </h3>
    )}
    <div className="content">
      {data.text && (
        <TinaMarkdown content={data.text} data-tinafield={`${tinaField}.text`} />
      )}
    </div>
  </div>
);

export const Columns = ({ data, parentField }) => (
  <section
    id={toKebabCase(data.heading)}
    className="px-4 my-24 desktop:my-32 text-center"
  >
    <h2
      className="h2 mb-8 tablet:mb-10 desktop:mb-12"
      data-tinafield={`${parentField}.heading`}
    >
      {data.heading}
    </h2>

    {data.items && (
      <div className="flex flex-col gap-8 tablet:flex-row desktop:text-2xl justify-center items-center tablet:items-stretch">
        {data.items.map((block, i) => <ColumnsItem data={block} tinaField={`${parentField}.items.${i}`} key={i}/>)}
      </div>
    )}
  </section>
);

const defaultItem = {
  title: "Column Title",
  text: "Column text.",
  icon: "tina",
};

export const ColumnsBlockSchema: Template = {
  name: "columns",
  label: "Columns",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      heading: "Columns Section Heading",
      items: [defaultItem, defaultItem, defaultItem],
    },
    itemProps: (item) => ({
      label: item?.heading ? `Columns - ${item.heading}` : 'Columns',
    }),
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Columns",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultItem,
        },
      },
      fields: [
        backgroundColorSchema,
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
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
