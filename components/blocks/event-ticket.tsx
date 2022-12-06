import * as React from "react";
import type { Template } from "tinacms";

import PointBackSvg from "../../assets/hand-icons/point-back.svg";

import toKebabCase from "../util/to-kebab-case";

export const EventTicket = ({ data, parentField }) => (
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

    <div className="max-w-[31rem] drop-shadow-glow">
      <div className="filter-smooth flex flex-col">
        <div className="scooped-corners bg-white p-3">
          <div className="filter-smooth">
            <div className="scooped-corners bg-mimosa px-4 mobile:px-8 tablet:px-14 pt-16 pb-20 tablet:pb-28 clip-bottom-8 flex flex-col gap-12 tablet:gap-20">
              <time dateTime="2022-11-16" className="flex flex-col gap-2 items-center text-center bow-border px-4 py-2">
                <div>Wednesday</div>
                <div className="font-tiempos text-5xl font-semibold leading-tight">18<sup className="font-lg">th</sup> January</div>
                <div>Online 🌍 6pm-7pm (UK time)</div>
              </time>

              <img
                src="./assets/event-logo-ux-processes.png"
                width="352px"
                height="124px"
                alt="ManyHands on UX processes"
                className="w-[352px] h-auto mx-auto px-4 tablet:px-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="ticket-divider z-10 relative flex items-center justify-center">
          <PointBackSvg
            className="absolute -translate-y-4 rotate-[135deg]"
            width="72"
            height="72"
          />
        </div>

        <div className="scooped-corners bg-white flex flex-col text-center px-12 tablet:px-14 pt-12 pb-6 gap-3">
          <a className="button" href="https://airtable.com/shr2L2uZkmcGkDi5h">
            <span className="text-lg mobile:text-2xl">Sign up for free</span>
            <svg
              className="mobile:w-11 mobile:h-9 shrink-0 arrow"
              width="32px"
              height="25px"
              viewBox="0 0 12 10"
              aria-hidden="true"
            >
              <path fill="none" stroke="currentColor" d="M2 5l8 0M7 2l3 3 l-3 3"/>
            </svg>
          </a>

          {/* <small className="text-lg">PS: dinner's on us 😋</small> */}
        </div>
      </div>
    </div>

    <svg width="0" height="0" aria-hidden="true">
      <filter id="filter-smooth">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 9 -4" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </svg>
  </section>
);

export const eventTicketBlockSchema: Template = {
  name: "eventTicket",
  label: "Event Ticket",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Next event",
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
