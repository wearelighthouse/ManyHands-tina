import * as React from "react";

import { client } from "../../.tina/__generated__/client";

import type { Template } from "tinacms";

import Link from "next/link";

import toKebabCase from "../util/to-kebab-case";
import { formatDate, formatTime } from "../util/date-time";
import { Status } from "../util/status";

export const getEventData = async () => {
  const eventsListData = await client.queries.postConnection();

  return eventsListData.data.postConnection.edges;
}

export const EventList = ({ data, parentField }) => {
  return (
    <section
      id={`event-${toKebabCase(data.heading)}`}
      className="px-4 my-24 desktop:my-32 grid"
    >
      <h2
        className="h2 text-center"
        data-tinafield={`${parentField}.heading`}
      >
        {data.heading}
      </h2>

      {data.events && (
        <div className="mx-auto w-full grid gap-8 max-w-6xl">
          {data.events.map((eventData) => {
            const event = eventData.node;
            const eventDateTime = new Date(event._values.date);
            if (eventDateTime < new Date()) return undefined;
            const eventDateTimeEnd = event._values.date_end ? new Date(event._values.date_end) : undefined;
            const locationParts = event._values.location?.split(/\r?\n/);

            return (
              <div key={event.id} className="relative flex max-tablet:grid gap-y-4 border-4 border-gray rounded-lg px-4 desktop:px-10 py-9">
                <h2 className="font-tiempos font-semibold text-3.5xl leading-tight">
                  <div>ManyHands</div>
                  <div className="text-dark-gray-ish">{event._values.location_short}</div>
                </h2>

                <div className="h-full bg-gray w-0.5 mx-2 desktop:mx-6 shrink-0"/>

                <div className="grow basis-1/2 grid content-center">
                  <div className="font-semibold flex gap-3 items-center">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32">
                      <path d="M16 4.5c-2.37 0-4.7.68-6.67 1.94a11.63 11.63 0 0 0-4.42 5.17 11.15 11.15 0 0 0 2.6 12.55 12.17 12.17 0 0 0 6.15 3.14c2.33.45 4.74.22 6.93-.65a11.9 11.9 0 0 0 5.39-4.24A11.18 11.18 0 0 0 28 16a11.3 11.3 0 0 0-3.52-8.13A12.28 12.28 0 0 0 16 4.5Zm0 21.1a10.3 10.3 0 0 1-5.56-1.6 9.7 9.7 0 0 1-3.68-4.3 9.23 9.23 0 0 1-.57-5.55 9.48 9.48 0 0 1 2.74-4.91 10.14 10.14 0 0 1 5.12-2.63 10.4 10.4 0 0 1 5.78.55 9.92 9.92 0 0 1 4.48 3.53 9.32 9.32 0 0 1-1.24 12.11A10.23 10.23 0 0 1 16 25.61Z"/>
                      <path d="M17 15.62v-5.36a.9.9 0 0 0-.3-.68 1.02 1.02 0 0 0-1.4 0 .94.94 0 0 0-.3.68V16c0 .26.1.5.3.68l3 2.88a1.02 1.02 0 0 0 1.4-.01.94.94 0 0 0 .01-1.34L17 15.61Z"/>
                    </svg>

                    <span className="font-medium">{ formatDate(eventDateTime) }</span>
                  </div>
                  <div className="ml-11">{ formatTime(eventDateTime, eventDateTimeEnd) }</div>
                </div>

                <div className="h-full bg-gray w-0.5 mx-2 desktop:mx-6 shrink-0"/>

                <div className="grow basis-1/2 grid content-center">
                  <div className="font-semibold  flex gap-3 items-center">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32">
                      <path d="M6 14.1c0 8.14 9.13 13.1 9.51 13.3a1.03 1.03 0 0 0 .98 0c.38-.2 9.51-5.16 9.51-13.3a9.4 9.4 0 0 0-2.93-6.79A10.22 10.22 0 0 0 16 4.5a10.2 10.2 0 0 0-7.07 2.81A9.4 9.4 0 0 0 6 14.09Zm10-7.68c2.12 0 4.15.81 5.65 2.25A7.53 7.53 0 0 1 24 14.09c0 6.02-6.2 10.25-8 11.35-1.8-1.1-8-5.33-8-11.35 0-2.03.85-3.98 2.35-5.42A8.18 8.18 0 0 1 16 6.42Z"/>
                      <path d="M16 18.89a5.2 5.2 0 0 0 2.78-.8 4.85 4.85 0 0 0 1.84-2.16 4.62 4.62 0 0 0-1.08-5.23 5.2 5.2 0 0 0-5.45-1.04 5 5 0 0 0-2.25 1.77 4.66 4.66 0 0 0 .63 6.05c.93.9 2.2 1.4 3.53 1.41Zm0-7.67A2.96 2.96 0 0 1 18.77 13a2.77 2.77 0 0 1-.65 3.13 3.12 3.12 0 0 1-3.27.62 2.98 2.98 0 0 1-1.34-1.06 2.8 2.8 0 0 1 .37-3.63 3.07 3.07 0 0 1 2.12-.84Z"/>
                    </svg>

                    <span className="font-medium">{locationParts?.[0]}</span>
                  </div>
                  <div className="ml-11">{locationParts?.[1]}</div>
                </div>

                {event._values.status && event._values.sign_up_url && (
                  <Status className="absolute -top-4 right-8">
                    {event._values.status}
                  </Status>
                  // <div className="absolute grid place-items-center uppercase -top-4 h-7 right-8 border-2 rounded-full px-3 border-pink bg-[#ffdeed] font-medium text-sm">
                  //   {event._values?.status}
                  // </div>
                )}
                <div className="flex tablet:items-center ml-4 desktop:ml-8 max-tablet:ml-1 shrink-0 leading-none">
                  <Link
                    href={`/event/${event._sys.filename}`}
                  >
                    {event._values.status !== '' ? (
                      <a className="button !grid !h-20 place-items-center place-content-center">
                        <div className="text-lg">Sign up now</div>
                        <div className="uppercase text-xs">Free entry</div>
                      </a>
                    ): (
                      <a className="button !grid !h-20 place-items-center place-content-center !bg-dark-gray">
                        <div className="text-lg">Fully booked</div>
                        <div className="uppercase text-xs">Free entry</div>
                      </a>
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
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
