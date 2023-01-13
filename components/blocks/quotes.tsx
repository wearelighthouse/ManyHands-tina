import React from "react";
import type { Template } from "tinacms";
import { backgroundColorSchema } from "../util/background-color";

const prefix = process.env.PREFIX ?? '';

export const Quote = ({ data, tinaField }) => (
  <blockquote className="grid justify-items-center gap-5" data-tinafield={tinaField}>
    <svg
      viewBox="0 0 204 36"
      width="204px"
      height="36px"
      role="img"
      aria-label="Five stars"
      className="text-orange"
    >
      <use href={`${prefix}/assets/star.svg#a`} x="0"></use>
      <use href={`${prefix}/assets/star.svg#a`} x="42"></use>
      <use href={`${prefix}/assets/star.svg#a`} x="84"></use>
      <use href={`${prefix}/assets/star.svg#a`} x="126"></use>
      <use href={`${prefix}/assets/star.svg#a`} x="168"></use>
    </svg>

    <div className="max-w-xl">
      {data.quote && (
        <q
          data-tinafield={`${tinaField}.quote`}
          className="text-lg tablet:text-xl desktop:text-2xl"
        >
          {data.quote}
        </q>
      )}
    </div>

    <footer>
      <p>{data.author}  <span className="text-dark-gray">–  {data.jobTitle}</span></p>
    </footer>
  </blockquote>
);

export const Quotes = ({ data, parentField = "" }) => (
  <section className={`tablet:m-4 ${data.background ?? ''}`}>
    <div className="max-w-6xl mx-auto text-center px-4 my-20">
      {data.quotes && data.quotes.map((block, i: number) => (
        <Quote
          tinaField={`${parentField}.quotes.${i}`}
          data={block}
          key={i}
        />
      ))}
    </div>
  </section>
);

const defaultQuote = {
  quote: "Thank you for introducing me to these inspiring and interesting people! I really enjoyed it.",
  author: "Magdalena R.",
  jobTitle: "Product Designer",
};

export const quotesBlockSchema: Template = {
  name: "quotes",
  label: "Quotes",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quotes: [ defaultQuote ],
    },
  },
  fields: [
    {
      type: "object",
      label: "Quotes",
      name: "quotes",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.author,
          };
        },
        defaultItem: {
          ...defaultQuote
        },
      },
      fields: [
        {
          type: "string",
          ui: {
            component: "textarea",
          },
          label: "Quote",
          name: "quote",
        },
        {
          type: "string",
          label: "Author",
          name: "author",
        },
        {
          type: "string",
          label: "Job Title",
          name: "jobTitle",
        },
      ],
    },
    backgroundColorSchema,
  ],
};
