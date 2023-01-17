import React from "react";
import type { Template } from "tinacms";

export const HostedBy = ({ data, parentField = "" }) => {
  return (
    <section
      className={`tablet:m-4 py-16 px-6 tablet:px-16 [&>*]:max-w-4xl [&>*]:mx-auto`}
      data-tinafield={`${parentField}.body`}
    >
      <div className="hosted-by px-6 grid py-10">
        <h2 className="text-4xl font-tiempos font-semibold mx-auto">
          <span>Hosted by</span>
          <span className="ml-6">Lighthouse</span> {/* TODO: Replace with image */}
        </h2>

        <div className="flex flex-wrap mx-auto">
          <div>
            Rupert Wood
          </div>

          <div>
            Dan Burgess
          </div>
        </div>
      </div>
    </section>
  );
};

const defaultItem = {
  name: "Lighthouse Person",
  job_title: "Designer",
};

export const hostedByBlockSchema: Template = {
  name: "hostedBy",
  label: "Hosted By",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      items: [defaultItem, defaultItem],
    },
  },
  fields: [
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
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Job Title",
          name: "job_title",
        },
      ],
    },
  ],
};
