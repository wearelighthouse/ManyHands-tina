import { defineStaticConfig } from "tinacms";
import { broughtToYouByBlockSchema } from "../components/blocks/brought-to-you-by";
import { contentBlockSchema } from "../components/blocks/content";
import { columnsBlockSchema } from "../components/blocks/columns";
import { eventListBlockSchema } from "../components/blocks/event-list";
import { hrBlockSchema } from "../components/blocks/hr";
import { heroBlockSchema } from "../components/blocks/hero";
import { companiesBlockSchema } from "../components/blocks/companies";
import { quotesBlockSchema } from "../components/blocks/quotes";
import { bigListBlockSchema } from "../components/blocks/big-list";
import { hostedByBlockSchema } from "../components/blocks/hosted-by";
import { talksByBlockSchema } from "../components/blocks/talks-by";
import { iconSchema } from "../components/util/icon";
import { statusSchema } from "../components/util/status";
import { basicHeroBlockSchema } from "../components/blocks/hero-basic";
import { accordionBlockSchema } from "../components/blocks/accordion";

const currentDateString = "31 January 2025";

const config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/post/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image",
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt",
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"],
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A",
            },
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"],
                  },
                ],
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text",
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string",
                  },
                ],
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text",
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string",
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string",
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text",
                  },
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me",
                  },
                },
              },
            ],
            isBody: true,
          },
        ],
      },
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true,
        },
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              iconSchema,
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" },
                ],
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home",
                  },
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href",
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar",
          },
        ],
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              heroBlockSchema,
              basicHeroBlockSchema,
              broughtToYouByBlockSchema,
              eventListBlockSchema,
              hrBlockSchema,
              columnsBlockSchema,
              contentBlockSchema,
              companiesBlockSchema,
              quotesBlockSchema,
              bigListBlockSchema,
              accordionBlockSchema,
            ],
          },
        ],
      },
      {
        name: "event",
        label: "Events",
        path: "content/events",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/event/${document._sys.filename}`;
          },
        },
        defaultItem: {
          date: `${currentDateString} 6:00 PM`,
          date_end: `${currentDateString} 7:00 PM`,
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            label: "Event Date & Time (Start)",
            name: "date",
            required: true,
            ui: {
              dateFormat: "D MMMM YYYY",
              timeFormat: "h:mm A",
            },
          },
          {
            type: "datetime",
            label: "Event Date & Time (End)",
            name: "date_end",
            required: false,
            ui: {
              dateFormat: "D MMMM YYYY",
              timeFormat: "h:mm A",
            },
          },
          {
            type: "string",
            label: "Location (short)",
            name: "location_short",
          },
          {
            type: "string",
            label: "Location (full)",
            name: "location",
            ui: {
              component: "textarea",
            },
          },
          statusSchema,
          {
            type: "string",
            label: "Sign up URL",
            name: "sign_up_url",
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true,
            },
            templates: [
              broughtToYouByBlockSchema,
              hrBlockSchema,
              columnsBlockSchema,
              contentBlockSchema,
              companiesBlockSchema,
              quotesBlockSchema,
              bigListBlockSchema,
              hostedByBlockSchema,
              talksByBlockSchema,
              accordionBlockSchema,
            ],
          },
        ],
      },
    ],
  },
});

export default config;
