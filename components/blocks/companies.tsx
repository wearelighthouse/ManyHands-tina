import React, { useRef } from "react";
import type { Template } from "tinacms";

export const Companies = ({ data, parentField = "" }) => {
  const itemContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="tablet:m-4 p-4">
      <div className="flex items-center justify-center max-w-6xl mx-auto gap-8">
        <button
          className="shrink-0 text-dark-gray inline-grid place-items-center w-14 h-14 rounded-full transition-all text-opacity-50 hover:bg-light-gray hover:text-opacity-100"
          onClick={() => itemContainerRef.current.scrollLeft = 0}
        >
          <svg
            className="rotate-180"
            viewBox="0 0 10 8"
            width="30"
            height="24"
            aria-label="Previous"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" stroke="currentColor" d="M1 4h8M6 1l3 3-3 3"/>
          </svg>
        </button>

        <div className="my-32 overflow-auto scroll-smooth scrollbar-hide" ref={itemContainerRef}>
          {/* Repeatable CMS field complication: py- is different per SVG */}
          {data.logos && (
            <div className="grid mobile:flex justify-items-center items-center">
              {data.logos.filter((logo) => logo?.src).map((logo, index: number) => (
                <div className="grid place-items-center shrink-0 w-1/2 tablet:w-1/3 desktop:w-1/4 p-2" key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? null}
                    height={logo.height ?? null}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="shrink-0 text-dark-gray inline-grid place-items-center w-14 h-14 rounded-full transition-all text-opacity-50 hover:bg-light-gray hover:text-opacity-100"
          onClick={() => itemContainerRef.current.scrollLeft = itemContainerRef.current.scrollWidth}
        >
          <svg
            viewBox="0 0 10 8"
            width="30"
            height="24"
            aria-label="Next"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" stroke="currentColor" d="M1 4h8M6 1l3 3-3 3"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export const companiesBlockSchema: Template = {
  name: "companies",
  label: "Company Logos",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      logos: [],
    },
  },
  fields: [
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
        },
        {
          name: "alt",
          label: "Logo Alt Text",
          type: "string",
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
  ],
};
