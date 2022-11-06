import React from "react";
import type { TinaTemplate } from "tinacms";

export const Quote = ({ data, tinaField }) => (
  <blockquote className="pt-11 grid justify-items-center gap-5" data-tinafield={tinaField}>
    <svg
      viewBox="0 0 204 36"
      width="204px"
      height="36px"
      role="img"
      aria-label="Five stars"
      className="text-orange"
    >
      <use href="assets/star.svg#a" x="0"></use>
      <use href="assets/star.svg#a" x="42"></use>
      <use href="assets/star.svg#a" x="84"></use>
      <use href="assets/star.svg#a" x="126"></use>
      <use href="assets/star.svg#a" x="168"></use>
    </svg>

    <div className="max-w-xl">
      {data.quote && (
        <q
          data-tinaField={`${tinaField}.icon`}
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
      <h2
        data-tinafield={`${parentField}.heading`}
        className="h2"
      >
        {data.heading}
      </h2>

      {/* Repeatable CMS field complication: py- is different per SVG */}
      <ul className="flex flex-col gap-8 tablet:flex-row justify-between items-center pb-11">
        <li className="py-6">
          <img
            className="mx-auto tablet:mx-0"
            src="./assets/img/automattic.png"
            alt="Automattic"
            width="224px"
            height="68px"
          />
        </li>
        <li className="py-5">
          <img
            className="mx-auto tablet:mx-0"
            src="./assets/img/cocado.png"
            alt="Ocado"
            width="143px"
            height="68px"
          />
        </li>
        <li className="py-5">
          <img
            className="mx-auto tablet:mx-0"
            src="./assets/img/keep-calling.png"
            alt="Keep Calling"
            width="170px"
            height="68px"
          />
        </li>
        <li className="py-3">
          <img
            className="mx-auto tablet:mx-0"
            src="./assets/img/total-energies.png"
            alt="Total Energies"
            width="60px"
            height="68px"
          />
        </li>
      </ul>

      <hr className="text-gray"/>

      {data.quotes && data.quotes.map((block, i) => (
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

export const testimonialsBlockSchema: TinaTemplate = {
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
      label: "Logos",
      name: "logos",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.alt,
          };
        },
        defaultItem: {

        },
      },
      fields: [
        {
          type: "object",
          label: "Logo",
          name: "logo",
          fields: [
            {
              name: "src",
              label: "Logo Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
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
