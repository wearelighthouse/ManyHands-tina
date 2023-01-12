import React from "react";
import type { Template } from "tinacms";

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

export const Testimonials = ({ data, parentField = "" }) => (
  <section className="bg-light-gray tablet:m-4">
    <div className="max-w-6xl mx-auto text-center px-4 py-20">
      {data.heading && (
        <h2
          data-tinafield={`${parentField}.heading`}
          className="h2"
        >
          {data.heading}
        </h2>
      )}

      {/* Repeatable CMS field complication: py- is different per SVG */}
      {data.logos && (
        <div className="grid desktop:flex justify-items-center justify-center desktop:justify-between items-center my-14">
          {data.logos.filter((logo) => logo?.src).map((logo, i: number) => (
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width ?? null}
              height={logo.height ?? null}
              key={i}
              data-pathinfo={`PREFIX: ${process.env.PREFIX}, assetPrefx: not-set`}
            />
          ))}
        </div>
      )}

      {(data.heading || data.logos) && data.quotes && (
        <hr className="text-gray pb-12"/>
      )}

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

export const testimonialsBlockSchema: Template = {
  name: "testimonials",
  label: "Testimonials",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      heading: "Loved by designers from…",
      logos: [],
      quotes: [ defaultQuote ],
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
    {
      type: "object",
      label: "Company Logos",
      name: "logos",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.alt ?? 'Company Logo',
        }),
      },
      fields: [
        {
          name: "src",
          label: "Logo Source",
          type: "image",
          required: true, // Doesn't work (yet?)
        },
        {
          name: "alt",
          label: "Logo Alt Text",
          type: "string",
          required: true,
        },
        {
          name: "width",
          label: "Width (px)",
          type: "number",
        },
        {
          name: "height",
          label: "Height (px)",
          type: "number",
        },
      ],
    },
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
        // {
        //   type: "object",
        //   label: "Image",
        //   name: "image",
        //   fields: [
        //     {
        //       name: "src",
        //       label: "Image Source",
        //       type: "image",
        //     },
        //     {
        //       name: "alt",
        //       label: "Alt Text",
        //       type: "string",
        //     },
        //   ],
        // },
      ],
    },
  ],
};
