import React from "react";
import type { Template } from "tinacms";
import LighthouseLogoSvg from "../../assets/img/lighthouse-logo-gradient.png";

export const HostedBy = ({ data, parentField = "" }) => {
  return (
    <section
      className={`tablet:mx-4 my-16 px-6 tablet:px-16 [&>*]:max-w-4xl [&>*]:mx-auto`}
      data-tinafield={`${parentField}.body`}
    >
      <div className="hosted-by px-6 grid">
        <h2 className="text-3.5xl font-tiempos font-semibold mx-auto flex flex-wrap gap-x-6 gap-y-2 items-center text-center">
          <span>Hosted&nbsp;by</span>
          <img src={LighthouseLogoSvg.src} alt="Lighthouse" width="240" height="59"/>
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
                  <div>{host.quote}</div>
                )}
                <div className="font-medium">{host.name ?? ''}</div>
                <div>{host.job_title ?? ''}</div>
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
  name: "Lighthouse Person",
  job_title: "Designer",
  quote: "",
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
