import * as React from "react";

import { client } from "../../.tina/__generated__/client";

import type { Template } from "tinacms";

import Link from "next/link";

import toKebabCase from "../util/to-kebab-case";

export const getEventData = async () => {
  const eventsListData = await client.queries.postConnection();

  return eventsListData.data.postConnection.edges;
}

export const EventList = ({ data, parentField }) => {
  // console.log(client.queries);
  // console.log(data);

  return (
    <section
      id={`event-${toKebabCase(data.heading)}`}
      className="px-4 my-24 desktop:my-32 flex flex-col items-center"
    >
      <h2
        className="h2"
        data-tinafield={`${parentField}.heading`}
      >
        {data.heading}
      </h2>

      <div className="">
        Event 1!
      </div>
    </section>
  );
};

export const eventListBlockSchema: Template = {
  name: "eventList",
  label: "Event List",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Next events",
    },
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading",
    },
  ],
};
