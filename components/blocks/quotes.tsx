import React, { useEffect, useRef, useState } from "react";
import type { Template } from "tinacms";
import { backgroundColorSchema } from "../util/background-color";

const prefix = process.env.prefix ?? '';

export const Quote = ({ data, tinaField }) => (
  <div className="w-full shrink-0 snap-always snap-center">
    <blockquote className="grid justify-items-center gap-5 max-w-6xl mx-auto text-center px-4" data-tinafield={tinaField}>
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

      <div className="max-w-lg px-2">
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
        <p className="text-dark-gray"><span className="font-medium">{data.author}</span> – {data.jobTitle}</p>
      </footer>
    </blockquote>
  </div>
);

export const Quotes = ({ data, parentField = "" }) => {
  const [active, setActive] = useState(0);
  const itemContainerRef = useRef<HTMLDivElement>(null);

  const scrollIntoView = (index: number) => {
    itemContainerRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  const handleIndicatorClick = (index: number) => scrollIntoView(index);

  useEffect(() => {
    const itemActiveObservers = data.quotes.map((_, index: number) => {
      const observer = new IntersectionObserver((entries) => entries[0].isIntersecting && setActive(index), {
        threshold: 0.5,
      });

      const item = itemContainerRef.current?.children[index];

      if (item != null) {
        observer.observe(item);
      }

      return observer;
    });

    return () => {
      itemActiveObservers.forEach((observer) => observer.disconnect);
    };
  }, [itemContainerRef]);

  return (
    <section className={`tablet:m-4 py-16 ${data.background ?? ''}`}>
      <div className="py-4 flex overflow-auto snap-mandatory snap-x scrollbar-hide" ref={itemContainerRef}>
        {data.quotes && data.quotes.map((block, index: number) => (
          <Quote
            tinaField={`${parentField}.quotes.${index}`}
            data={block}
            key={index}
          />
        ))}
      </div>

      {data.quotes && data.quotes.length > 1 && (
        <div className="flex gap-2 justify-center">
          {data.quotes.map((_, index: number) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="w-8 h-8 grid place-items-center text-dark-gray/40 aria-pressed:text-dark-gray/100"
              aria-pressed={index === active}
              aria-label={`Carousel indicator button ${index + 1}`}
            >
              <div className={`w-7 h-1 bg-current`}/>
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

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
