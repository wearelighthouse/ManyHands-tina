import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Icon, iconSchema } from "../util/icon";
import toKebabCase from "../util/to-kebab-case";
import { backgroundColorSchema } from "../util/background-color";

export const ColumnsItem = ({ data, tinaField }) => (
  <div className="basis-1/4 max-w-2xs grid justify-items-center content-start" data-tinafield={tinaField}>
    {(data.icon || data.textIcon) && (
      <div
        className={`p-2 tablet:p-2.5 rounded-full ${data.background ?? ''}`}
        data-tinafield={`${tinaField}.background`}
      >
        {data.icon && !data.textIcon && (
          <Icon
            tinaField={`${tinaField}.icon`}
            data={{ icon: data.icon }}
            className="w-auto h-20 tablet:h-24"
          />
        )}
        {data.textIcon && (
          <div
            className="font-tiempos font-semibold text-5xl tablet:text-6xl h-20 tablet:h-24 aspect-square"
            data-tinafield={`${tinaField}.textIcon`}
          >
            {data.textIcon}
          </div>
        )}
      </div>
    )}

    {data.title && (
      <h3
        data-tinafield={`${tinaField}.title`}
        className="font-medium mt-3"
      >
        {data.title}
      </h3>
    )}

    <div className="content mt-1" data-tinafield={`${tinaField}.text`}>
      {data.text && (
        <TinaMarkdown content={data.text} data-tinafield={`${tinaField}.text`} />
      )}
    </div>
  </div>
);

export const Columns = ({ data, parentField }) => (
  <section
    id={data.heading ? toKebabCase(data.heading) : undefined}
    className="px-4 my-24 desktop:my-32 text-center"
  >
    {data.heading && (
      <h2
        className="h2 mb-8 tablet:mb-10 desktop:mb-12"
        data-tinafield={`${parentField}.heading`}
      >
        {data.heading}
      </h2>
    )}

    {data.items && (
      <div className="flex flex-col gap-8 tablet:flex-row desktop:text-2xl justify-center items-center tablet:items-stretch">
        {data.items.map((block, i) => <ColumnsItem data={block} tinaField={`${parentField}.items.${i}`} key={i}/>)}
      </div>
    )}
  </section>
);

const defaultItem = (label: string) => ({
  title: `Column ${label}`,
  text: {
    type: 'root',
    children: [
      {
        type: 'p',
        children: [
          {
            type: 'text',
            text: 'Column text.',
          },
        ],
      },
    ],
  },
  icon: "tina",
});

export const ColumnsBlockSchema: Template = {
  name: "columns",
  label: "Columns",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: () => ({
      items: [defaultItem('a'), defaultItem('b'), defaultItem('c')],
    }),
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
            label: item?.title || 'Column',
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
          label: "Text Icon",
          name: "textIcon",
        },
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
