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

import React, { useEffect, useState } from "react";
import { Blocks } from "../blocks-renderer";
import { formatDate, formatTime } from "../util/date-time";
import { getCtaFromStatus, Status } from "../util/status";
const prefix = process.env.prefix ?? '';

const Hero = (props) => {
  const eventDateTime = new Date(props.date);
  const eventDateTimeEnd = props.date_end ? new Date(props.date_end) : undefined;
  const locationParts = props.location?.split(/\r?\n/);

  return (
    <div className={`px-6 pt-14 tablet:px-16 pb-20 desktop:pb-32 o-section-clip--ramp-bottom-right tablet:m-4 ${props.location_short !== 'Online' ? 'bg-mimosa' : 'bg-iceberg'}`}>
      <a href={`${prefix}/`} aria-label="Home">
        <img className="mx-auto" src={`${prefix}/assets/manyhands-logo.svg`} alt="Many Hands" width="188px" height="34px"/>
      </a>

      <div className="grid tablet:grid-cols-2 gap-8 justify-items-start max-w-4xl mx-auto mt-12">
        {props.status && props.status !== 'full' ? (
          <Status greyscale>{props.status}</Status>
        ) : <span/>}

        <h1
          className="text-5xl font-tiempos font-semibold grid col-start-1 leading-tight"
        >
          <span>ManyHands</span>
          <span className="text-dark-gray-new">{props.location_short || 'Online'}</span>
        </h1>

        {props.sign_up_url && props.status !== 'full' ? (
          <div>
            <a href={props.sign_up_url} className="button !h-14 col-start-1 !text-lg !gap-3 !px-6" id="hero-sign-up">
              <span className="leading-tight">{getCtaFromStatus(props.status)}</span>
              <svg
                className="shrink-0 arrow"
                width="32"
                height="25"
                viewBox="0 0 12 10"
                aria-hidden="true"
              >
                <path fill="none" stroke="currentColor" d="M2 5l8 0M7 2l3 3 l-3 3"/>
              </svg>
            </a>
            <div className="mt-5 font-medium text-dark-gray">Free Entry</div>
          </div>
        ) : (
          <div id="hero-sign-up">
            <div className="button !h-14 col-start-1 !text-lg !gap-3 !px-6 !bg-dark-gray-new cursor-not-allowed" id="hero-sign-up">
              <span className="leadint-right">Fully Booked</span>
            </div>
          </div>
        )}

        <div className="tablet:col-start-2 tablet:row-start-2 row-span-2 grid gap-6 leading-loose my-2 content-start">
          <div>
            <div className="font-semibold flex gap-3 items-center">
              <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 4.5c-2.37 0-4.7.68-6.67 1.94a11.63 11.63 0 0 0-4.42 5.17 11.15 11.15 0 0 0 2.6 12.55 12.17 12.17 0 0 0 6.15 3.14c2.33.45 4.74.22 6.93-.65a11.9 11.9 0 0 0 5.39-4.24A11.18 11.18 0 0 0 28 16a11.3 11.3 0 0 0-3.52-8.13A12.28 12.28 0 0 0 16 4.5Zm0 21.1a10.3 10.3 0 0 1-5.56-1.6 9.7 9.7 0 0 1-3.68-4.3 9.23 9.23 0 0 1-.57-5.55 9.48 9.48 0 0 1 2.74-4.91 10.14 10.14 0 0 1 5.12-2.63 10.4 10.4 0 0 1 5.78.55 9.92 9.92 0 0 1 4.48 3.53 9.32 9.32 0 0 1-1.24 12.11A10.23 10.23 0 0 1 16 25.61Z"/>
                <path d="M17 15.62v-5.36a.9.9 0 0 0-.3-.68 1.02 1.02 0 0 0-1.4 0 .94.94 0 0 0-.3.68V16c0 .26.1.5.3.68l3 2.88a1.02 1.02 0 0 0 1.4-.01.94.94 0 0 0 .01-1.34L17 15.61Z"/>
              </svg>

              <span className="font-semibold">{ formatDate(eventDateTime) }</span>
            </div>
            <div className="ml-11">{ formatTime(eventDateTime, eventDateTimeEnd) }</div>
          </div>
          <div>
            <div className="flex gap-3 items-center">
            <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#3A3A4E" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M6 14.1c0 8.14 9.13 13.1 9.51 13.3a1.03 1.03 0 0 0 .98 0c.38-.2 9.51-5.16 9.51-13.3a9.4 9.4 0 0 0-2.93-6.79A10.22 10.22 0 0 0 16 4.5a10.2 10.2 0 0 0-7.07 2.81A9.4 9.4 0 0 0 6 14.09Zm10-7.68c2.12 0 4.15.81 5.65 2.25A7.53 7.53 0 0 1 24 14.09c0 6.02-6.2 10.25-8 11.35-1.8-1.1-8-5.33-8-11.35 0-2.03.85-3.98 2.35-5.42A8.18 8.18 0 0 1 16 6.42Z"/>
                <path d="M16 18.89a5.2 5.2 0 0 0 2.78-.8 4.85 4.85 0 0 0 1.84-2.16 4.62 4.62 0 0 0-1.08-5.23 5.2 5.2 0 0 0-5.45-1.04 5 5 0 0 0-2.25 1.77 4.66 4.66 0 0 0 .63 6.05c.93.9 2.2 1.4 3.53 1.41Zm0-7.67A2.96 2.96 0 0 1 18.77 13a2.77 2.77 0 0 1-.65 3.13 3.12 3.12 0 0 1-3.27.62 2.98 2.98 0 0 1-1.34-1.06 2.8 2.8 0 0 1 .37-3.63 3.07 3.07 0 0 1 2.12-.84Z"/>
              </svg>

              <span className="font-semibold">{locationParts?.[0]}</span>
            </div>
            <div className="ml-11">{locationParts?.[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Event = (props) => {
  const [ isVisible, setIsVisible ] = useState(true);

  const observerCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(document.getElementById('hero-sign-up'));
  }, []);

  return (
    <>
      <Hero {...props} />

      <Blocks {...props}/>

      {props.sign_up_url && props.status && props.status !== 'full' && (
        <div className={`sticky left-0 right-0 bottom-0 flex tablet:m-4 px-6 z-10 transition ${isVisible ? 'opacity-0' : 'opacity-100'} ${props.location_short !== 'Online' ? 'bg-mimosa' : 'bg-iceberg'}`}>
          <div className="flex flex-wrap justify-center items-baseline text-center gap-x-16 gap-y-2 tablet:gap-y-4 mx-auto py-3">
            <h2 className="max-tablet:leading-tight text-2xl tablet:text-3xl font-tiempos font-semibold translate-y-[.25rem]">Register your interest&nbsp;now</h2>
            <span className="max-tablet:mt-0.5 mobile:text-lg tablet:text-xl desktop:text-2xl tablet:translate-y-[.25rem]">Spaces are limited and seats&nbsp;fill&nbsp;up&nbsp;quick!</span>
            <a href={props.sign_up_url} className="max-mobile:w-full button !h-14 col-start-1 !text-lg !gap-3 !px-6">
              <span>{getCtaFromStatus(props.status)}</span>
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
          </div>
        </div>
      )}
    </>
  );
};
