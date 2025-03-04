import React from "react";
import type { Event, Page } from "../tina/__generated__/types";
import { Accordion } from "./blocks/accordion";
import { BigList } from "./blocks/big-list";
import { BroughtToYouBy } from "./blocks/brought-to-you-by";
import { Companies } from "./blocks/companies";
import { Content } from "./blocks/content";
import { EventList } from "./blocks/event-list";
import { Hero } from "./blocks/hero";
import { HostedBy } from "./blocks/hosted-by";
import { Columns } from "./blocks/columns";
import { Hr } from "./blocks/hr";
import { Quotes } from "./blocks/quotes";
import { BasicHero } from "./blocks/hero-basic";
import { TalksBy } from "./blocks/talks-by";

interface Events {
  // The events array isn't _quite_ an array of objects of the Event type. TODO: Figure out correct typing.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[];
}

export const Blocks = (props: (Omit<Page, "id" | "_sys" | "_values"> | Omit<Event, "id" | "_sys" | "_values">) & Events) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i: number) {
            switch (block.__typename) {
              case "EventBlocksContent":
              case "PageBlocksContent":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksHero":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksColumns":
              case "PageBlocksColumns":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Columns data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksEventList":
              case "PageBlocksEventList":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <EventList data={{...block, events: props.events}} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksHr":
              case "PageBlocksHr":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Hr data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksBroughtToYouBy":
              case "PageBlocksBroughtToYouBy":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <BroughtToYouBy data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksCompanies":
              case "PageBlocksCompanies":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Companies data={block} />
                  </div>
                );
              case "EventBlocksQuotes":
              case "PageBlocksQuotes":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Quotes data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksBigList":
              case "PageBlocksBigList":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <BigList data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksHostedBy":
              case "PageBlocksHostedBy":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <HostedBy data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksBasicHero":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <BasicHero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksTalksBy":
              case "PageBlocksTalksBy":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TalksBy data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "EventBlocksAccordion":
              case "PageBlocksAccordion":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Accordion data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
