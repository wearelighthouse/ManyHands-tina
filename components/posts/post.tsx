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

/**
 * The post component has had it's styling removed, as it's currently
 * unused. This way it's classNames don't end up in the output CSS.
 * To re-add them, see:
 * https://github.com/tinacms/tina-cloud-starter/blob/main/components/posts/post.tsx
 */

import React from "react";
import format from "date-fns/format";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Prism } from "tinacms/dist/rich-text/prism";
import type { TinaMarkdownContent, Components } from "tinacms/dist/rich-text";

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
      <div className="">
        <div className="">
          <div className="">
            <TinaMarkdown content={props.children} />
          </div>
          <div className="">
            <form className="">
              <label htmlFor="email-address" className="">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className=""
                placeholder={props.placeholder}
              />
              <div className="">
                <button
                  type="submit"
                  className=""
                >
                  {props.buttonText}
                </button>
              </div>
            </form>
            <div className="">
              {props.disclaimer && <TinaMarkdown content={props.disclaimer} />}
            </div>
          </div>
        </div>
      </div>
    );
  },
  img: (props) => (
    <div className="">
      <img src={props.url} alt={props.alt} />
    </div>
  ),
};

export const Post = (props) => {
  const date = new Date(props.date);
  let formattedDate = "";
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy");
  }

  return (
    <div className="">
      <h2
        data-tinafield="title"
        className={``}
      >
        <span
          className={``}
        >
          {props.title}
        </span>
      </h2>
      <div
        data-tinafield="author"
        className=""
      >
        {props.author && (
          <>
            <div className="">
              <img
                className=""
                src={props.author.avatar}
                alt={props.author.name}
              />
            </div>
            <p className="">
              {props.author.name}
            </p>
            <span className="">
              —
            </span>
          </>
        )}
        <p
          data-tinafield="date"
          className=""
        >
          {formattedDate}
        </p>
      </div>
      {props.heroImg && (
        <div data-tinafield="heroImg" className="">
          <img
            src={props.heroImg}
            className=""
          />
        </div>
      )}
      <div className="">
        <TinaMarkdown components={components} content={props._body} />
      </div>
    </div>
  );
};
