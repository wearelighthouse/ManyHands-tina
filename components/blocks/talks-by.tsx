import React from "react";
import type { Template } from "tinacms";

export const TalksBy = ({ data, parentField = "" }) => {
  return (
    <section
      className={`tablet:m-4 py-16 px-6 tablet:px-16 [&>*]:max-w-4xl [&>*]:mx-auto`}
      data-tinafield={`${parentField}.body`}
    >
      <div className="px-6 grid">
        <h2
          className="h2 text-center"
          data-tinafield={`${parentField}.heading`}
        >
          {data.heading}
        </h2>

        {data.hosts && (
          <div className="flex flex-wrap gap-16 tablet:gap-32 mt-16 mx-auto justify-center">
            {data.hosts.map((host, i: number) => (
              <div className="grid justify-items-center gap-1 text-xl max-w-xs text-center" key={i}>
                <div className="pb-4">
                  {host.src && (
                    <img src={host.src} alt={host.alt} height={228} width={228} />
                  )}
                </div>
                {host.quote && host.quote !== '' && (
                  <div className="mt-2 mb-4">{host.quote}</div>
                )}
                <div className="font-medium">{host.name ?? ''}</div>
                <div className="text-md font-medium text-dark-gray">{host.job_title ?? ''}</div>
                {host.link_url && host.link_text && (
                  <a href={host.link_url} className="text-lg font-medium text-pink decoration-2 hover:underline">{host.link_text}</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const defaultItem = {
  name: "",
  job_title: "",
  quote: "",
};

export const talksByBlockSchema: Template = {
  name: "talksBy",
  label: "Talks By",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      heading: "Talks from the best in the business",
      hosts: [defaultItem, defaultItem],
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
      label: "Hosts",
      name: "hosts",
      list: true,
      ui: {
        itemProps: (host) => {
          return {
            label: host?.name,
          };
        },
        defaultItem: {
          ...defaultItem,
        },
      },
      fields: [
        {
          name: "src",
          label: "Profile Picture Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Profile Picture Alt Text",
          type: "string",
        },
        {
          type: "string",
          label: "Quote",
          name: "quote",
        },
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Job Title",
          name: "job_title",
        },
        {
          type: "string",
          label: "Link URL",
          name: "link_url",
        },
        {
          type: "string",
          label: "Link Text",
          name: "link_text",
        },
      ],
    },
  ],
};
