/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import format from "date-fns/format";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Prism } from "tinacms/dist/rich-text/prism";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";
import { Hr } from "../blocks/hr";
import { Testimonials } from "../blocks/testimonials";
import { BroughtToYouBy } from "../blocks/brought-to-you-by";

const components: Components<{
  BlockQuote: {
    children: TinaMarkdownContent;
    authorName: string;
  };
  DateTime: {
    format?: string;
  };
  NewsletterSignup: {
    placeholder: string;
    buttonText: string;
    children: TinaMarkdownContent;
    disclaimer?: TinaMarkdownContent;
  };
}> = {
  code_block: (props) => <Prism {...props} />,
  BlockQuote: (props: {
    children: TinaMarkdownContent;
    authorName: string;
  }) => {
    return (
      <div>
        <blockquote>
          <TinaMarkdown content={props.children} />
          {props.authorName}
        </blockquote>
      </div>
    );
  },
  DateTime: (props) => {
    const dt = React.useMemo(() => {
      return new Date();
    }, []);

    switch (props.format) {
      case "iso":
        return <span>{dt.toISOString()}</span>;
      case "utc":
        return <span>{dt.toUTCString()}</span>;
      case "local":
        return <span>{dt.toLocaleDateString()}</span>;
      default:
        return <span>{dt.toLocaleDateString()}</span>;
    }
  },
  NewsletterSignup: (props) => {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="">
            <TinaMarkdown content={props.children} />
          </div>
          <div className="mt-8 ">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:max-w-xs rounded-md"
                placeholder={props.placeholder}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {props.buttonText}
                </button>
              </div>
            </form>
            <div className="mt-3 text-sm text-gray-500">
              {props.disclaimer && <TinaMarkdown content={props.disclaimer} />}
            </div>
          </div>
        </div>
      </div>
    );
  },
  img: (props) => (
    <div className="flex items-center justify-center">
      <img src={props.url} alt={props.alt} />
    </div>
  ),
};

const Hero = () => (
  <div className="bg-mimosa px-6 pt-14 tablet:px-16 pb-20 desktop:pb-32 o-section-clip--ramp-bottom-right tablet:m-4">
    <a href="/" aria-label="Home">
      <img className="mx-auto" src="../../assets/manyhands-logo.svg" alt="Many Hands" width="188px" height="34px"/>
    </a>

    <div className="grid grid-cols-2 gap-8 justify-items-start max-w-4xl mx-auto mt-12">
      <span className="rounded uppercase bg-[#F3EDE0] border-2 border-[#FF9325] rounded-full px-3 font-semibold text-[1rem]">Filling up fast</span>

      <h1
        className="text-5xl font-tiempos font-bold grid col-start-1 leading-tight"
      >
        <span>ManyHands</span>
        <span className="opacity-60">Online</span>
      </h1>

      <a href="/" className="button !h-14 col-start-1 !text-lg !gap-3 !px-6">
        <span>Sign up now</span>
        <svg
          className="shrink-0 arrow"
          width="32px"
          height="25px"
          viewBox="0 0 12 10"
          aria-hidden="true"
        >
          <path fill="none" stroke="currentColor" d="M2 5l8 0M7 2l3 3 l-3 3"/>
        </svg>
      </a>

      <div className="col-start-2 row-start-2 row-span-2 grid gap-6 leading-loose my-2 content-start">
        <div>
          <div className="font-semibold flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32">
              <path d="M16 4.5c-2.37 0-4.7.68-6.67 1.94a11.63 11.63 0 0 0-4.42 5.17 11.15 11.15 0 0 0 2.6 12.55 12.17 12.17 0 0 0 6.15 3.14c2.33.45 4.74.22 6.93-.65a11.9 11.9 0 0 0 5.39-4.24A11.18 11.18 0 0 0 28 16a11.3 11.3 0 0 0-3.52-8.13A12.28 12.28 0 0 0 16 4.5Zm0 21.1a10.3 10.3 0 0 1-5.56-1.6 9.7 9.7 0 0 1-3.68-4.3 9.23 9.23 0 0 1-.57-5.55 9.48 9.48 0 0 1 2.74-4.91 10.14 10.14 0 0 1 5.12-2.63 10.4 10.4 0 0 1 5.78.55 9.92 9.92 0 0 1 4.48 3.53 9.32 9.32 0 0 1-1.24 12.11A10.23 10.23 0 0 1 16 25.61Z"/>
              <path d="M17 15.62v-5.36a.9.9 0 0 0-.3-.68 1.02 1.02 0 0 0-1.4 0 .94.94 0 0 0-.3.68V16c0 .26.1.5.3.68l3 2.88a1.02 1.02 0 0 0 1.4-.01.94.94 0 0 0 .01-1.34L17 15.61Z"/>
            </svg>

            <span className="font-semibold">Wednesday 17th Jan 2023</span>
          </div>
          <div className="ml-11">6 - 7pm (UK time)</div>
        </div>
        <div>
          <div className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32">
              <path d="M6 14.1c0 8.14 9.13 13.1 9.51 13.3a1.03 1.03 0 0 0 .98 0c.38-.2 9.51-5.16 9.51-13.3a9.4 9.4 0 0 0-2.93-6.79A10.22 10.22 0 0 0 16 4.5a10.2 10.2 0 0 0-7.07 2.81A9.4 9.4 0 0 0 6 14.09Zm10-7.68c2.12 0 4.15.81 5.65 2.25A7.53 7.53 0 0 1 24 14.09c0 6.02-6.2 10.25-8 11.35-1.8-1.1-8-5.33-8-11.35 0-2.03.85-3.98 2.35-5.42A8.18 8.18 0 0 1 16 6.42Z"/>
              <path d="M16 18.89a5.2 5.2 0 0 0 2.78-.8 4.85 4.85 0 0 0 1.84-2.16 4.62 4.62 0 0 0-1.08-5.23 5.2 5.2 0 0 0-5.45-1.04 5 5 0 0 0-2.25 1.77 4.66 4.66 0 0 0 .63 6.05c.93.9 2.2 1.4 3.53 1.41Zm0-7.67A2.96 2.96 0 0 1 18.77 13a2.77 2.77 0 0 1-.65 3.13 3.12 3.12 0 0 1-3.27.62 2.98 2.98 0 0 1-1.34-1.06 2.8 2.8 0 0 1 .37-3.63 3.07 3.07 0 0 1 2.12-.84Z"/>
            </svg>

            <span className="font-semibold">Anywhere in the world</span>
          </div>
          <div className="ml-11">Via Google Meet</div>
        </div>
      </div>
    </div>
  </div>
);

const Content = () => (
  <div className="px-6 py-16">
    <section className="mx-auto max-w-4xl text-2xl">
      <p>
        Imagine if there was a way to connect with fellow designers around the world who work at top innovative products, and get creative together on a fun UX challenge you likely haven’t encountered before...
      </p>

      <ul className="font-tiempos font-semibold text-dark-gray my-8">
        <li>A social network <span className="text-dark-gray">for</span> rockstars?</li>
        <li>A banking app <span className="text-dark-gray">for</span> astronauts?</li>
        <li>A task management tool <span className="text-dark-gray">for</span> librarians?</li>
      </ul>

      <p>
        Spoiler alert: you can, it’s free, and you don’t even have to leave your house.
      </p>
    </section>
  </div>
);

const List = () => (
  <div className="my-20 px-6 flex grid gap-16">
    <h2 className="mx-auto text-4xl font-tiempos font-semibold">Seats are limited - register your interest now</h2>

    <dl className="mx-auto my-8 max-w-2xl text-xl tablet:text-2xl grid gap-10 circle-bg-dl">
      <div>
        <dt className="font-medium">
          <span className="indicator">1</span>Sign up ✅
        </dt>
        <dd>Give us a few details, sit tight, and we'll be in touch nearer the event!</dd>
      </div>

      <div>
        <dt className="font-medium">
        <span className="indicator">2</span>Receive an invite  📩
        </dt>
        <dd>If we have room for you this time, you’ll receive an invite to the event</dd>
      </div>

      <div>
        <dt className="font-medium">
          <span className="indicator">3</span>RSVP  🗓️
        </dt>
        <dd>Make sure to respond to the invite to secure your seat</dd>
      </div>

      <div>
        <dt className="font-medium">
          <span className="indicator">4</span>Join the fun  🎉
        </dt>
        <dd>Have a fun-filled hour of problem solving with your new best mates</dd>
      </div>
    </dl>
  </div>
);

export const Event = (props) => {
  const broughtToYouByText = {
    children: [
      {
        type: 'p',
        children: [
          {
            type: 'text',
            text: 'The ',
          },
          {
            type: 'text',
            bold: true,
            text: 'number one UX / UI design partner',
          },
          {
            type: 'text',
            text: ' for digital product teams',
          },
        ],
      },
    ],
  };

  return (
    <div className="flex-1">
      <Hero/>

      <Content/>

      <div className="flex py-8 grid gap-16">
        <h2 className="mx-auto px-6 text-4xl font-tiempos font-semibold">Collab with pros from companies like…</h2>
        <div className="mx-auto flex flex-wrap gap-8">
          <div>American Express</div>
          <div>Truelayer</div>
          <div>charlieHR</div>
          <div>Revolut</div>
        </div>
      </div>

      <Hr data={{ icon: 'horns' }} parentField={{}} />

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

        <div className="mx-auto max-w-2xl text-xl tablet:text-2xl">
          <p className="my-8">
            <a href="https://wearelighthouse.com" className="text-pink hover:underline">Lighthouse</a> is a specialist UX and UI design agency based in London, trusted by enterprise organisations to tackle the toughest challenges since 2008 🚀
          </p>

          <p className="my-8">
            Two members of our team of UX experts facilitate each event, and spin the ManyHands Randomiser™ on the night to generate a unique scenario for you to rapidly generate ideas around with a curated bunch of product people.
          </p>
        </div>
      </div>

      <Testimonials data={{ quotes: [{ quote: "Thank you for introducing me to these inspiring and interesting people! I really enjoyed it.", author: "Magdalena R.", jobTitle: "Product Designer" }] }} />

      <List/>

      <Hr data={{ icon: 'call' }} parentField={{}} />

      <section className="tablet:m-4 px-4 py-16 tablet:py-20 bg-light-gray grid gap-6 items-center text-center">
        <h2 className="text-4xl font-tiempos font-semibold">Want to join the fun in the future?</h2>
        <p className="text-2xl">
          We'll let you know when we've set dates for the next events
        </p>
        <a href="/" className="button mx-auto !h-14 !text-lg !px-6">Join the list</a>
      </section>

      <BroughtToYouBy data={{ largeText: broughtToYouByText }} parentField={{}} />
    </div>
  );
};
