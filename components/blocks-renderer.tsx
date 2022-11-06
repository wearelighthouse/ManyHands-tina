import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { BroughtToYouBy } from "./blocks/brought-to-you-by";
import { Content } from "./blocks/content";
import { HowItWorks } from "./blocks/how-it-works";
import { EventTicket } from "./blocks/event-ticket";
import { Hr } from "./blocks/hr";
import { Hero } from "./blocks/hero";
import { Testimonials } from "./blocks/testimonials";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => (
  <>
    {props.blocks
      ? props.blocks.map(function (block, i) {
          switch (block.__typename) {
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
            case "PageBlocksHowItWorks":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <HowItWorks data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksEventTicket":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <EventTicket data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksHr":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Hr data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksBroughtToYouBy":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <BroughtToYouBy data={block} parentField={`blocks.${i}`} />
                </div>
              );
            case "PageBlocksTestimonials":
              return (
                <div
                  data-tinafield={`blocks.${i}`}
                  key={i + block.__typename}
                >
                  <Testimonials data={block} parentField={`blocks.${i}`} />
                </div>
              );
            default:
              return null;
          }
        })
      : null}
  </>
);
