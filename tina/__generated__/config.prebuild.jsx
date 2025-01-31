// tina/config.tsx
import { defineStaticConfig } from "tinacms";

// components/blocks/brought-to-you-by.tsx
import * as React2 from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
var prefix = process.env.prefix ?? "";
var defaultLargeText = {
  type: "root",
  children: [
    {
      type: "p",
      children: [
        {
          type: "text",
          text: "The "
        },
        {
          type: "text",
          bold: true,
          text: "go-to UX / UI design partner"
        },
        {
          type: "text",
          text: " for ambitious product teams"
        }
      ]
    }
  ]
};
var broughtToYouByBlockSchema = {
  name: "broughtToYouBy",
  label: "Brought to you by",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: () => ({
      largeText: defaultLargeText
    })
  },
  fields: [
    {
      label: "Heading",
      name: "largeText",
      type: "rich-text"
    }
  ]
};

// components/blocks/content.tsx
import React3 from "react";
import { TinaMarkdown as TinaMarkdown2 } from "tinacms/dist/rich-text";

// components/util/background-color.tsx
var backgroundColorsMap = {
  "Blue": "bg-iceberg",
  "Gray": "bg-light-gray",
  "Pink": "bg-light-pink",
  "Yellow": "bg-mimosa"
};
var backgroundColorSchema = {
  type: "string",
  label: "Background Color",
  name: "background",
  options: Object.keys(backgroundColorsMap).map((key) => ({
    label: key,
    value: backgroundColorsMap[key]
  }))
};

// components/util/get-label.tsx
var characterLimit = 40;
var getContentLabel = (body) => {
  let foundHeading = "";
  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ["h1", "h2", "h3"].includes(nestedValue.type) && nestedValue.children?.[0].text) {
      foundHeading = nestedValue.children?.[0].text;
    }
    return nestedValue;
  });
  JSON.stringify(body, (_, nestedValue) => {
    if (!foundHeading && nestedValue && ["p"].includes(nestedValue.type) && nestedValue.children?.[0].text) {
      foundHeading = nestedValue.children?.[0].text;
    }
    return nestedValue;
  });
  return foundHeading.length > characterLimit ? `${foundHeading?.slice(0, characterLimit)}\u2026` : foundHeading;
};
var getRichTextItemLabel = (body) => {
  let label = "";
  JSON.stringify(body, (_, nestedValue) => {
    nestedValue?.children?.forEach((child) => label += child.text ?? "");
    return nestedValue;
  });
  return label.length > characterLimit ? `${label?.slice(0, characterLimit)}\u2026` : label;
};

// components/blocks/content.tsx
var descriptionListSchema = {
  name: "DescriptionList",
  label: "Description List",
  fields: [
    {
      type: "object",
      label: "Description List Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.term || "Description List Item"
        })
      },
      fields: [
        {
          type: "string",
          label: "Term",
          name: "term"
        },
        {
          name: "iconSrc",
          label: "Detail Icon",
          type: "image"
        },
        {
          type: "object",
          label: "Details",
          name: "details",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.text || "Description List Detail"
            })
          },
          fields: [
            {
              type: "string",
              label: "Text",
              name: "text"
            }
          ]
        }
      ]
    }
  ]
};
var ctaSchema = {
  name: "Cta",
  label: "CTA",
  fields: [
    {
      name: "href",
      label: "href",
      type: "string"
    },
    {
      name: "text",
      label: "text",
      type: "string"
    }
  ]
};
var contentBlockSchema = {
  name: "content",
  label: "Content",
  ui: {
    previewSrc: "/blocks/content.png",
    itemProps: (value) => {
      const topLevelHeading = getContentLabel(value.body);
      return {
        label: topLevelHeading ? `Content - ${topLevelHeading}` : "Content"
      };
    },
    defaultItem: () => {
      return {
        body: {
          type: "root",
          children: [
            {
              type: "p",
              children: [
                {
                  type: "text",
                  text: "Default Text"
                }
              ]
            }
          ]
        }
      };
    }
  },
  fields: [
    backgroundColorSchema,
    {
      type: "rich-text",
      parser: {
        type: "mdx"
      },
      label: "Body",
      name: "body",
      templates: [
        {
          name: "Center",
          label: "Center",
          fields: [
            {
              name: "children",
              label: "Children",
              type: "rich-text",
              parser: {
                type: "mdx"
              },
              templates: [
                ctaSchema
              ]
            }
          ]
        },
        ctaSchema,
        descriptionListSchema
      ]
    }
  ]
};

// components/blocks/columns.tsx
import { TinaMarkdown as TinaMarkdown3 } from "tinacms/dist/rich-text";

// components/util/icon.tsx
import * as React4 from "react";

// assets/img/tina.svg
var tina_default = "./tina-FODJUDMX.svg";

// assets/hand-icons/call.svg
var call_default = "./call-4K5JME4W.svg";

// assets/hand-icons/fingers-crossed.svg
var fingers_crossed_default = "./fingers-crossed-IEX5TLVW.svg";

// assets/hand-icons/fist-front.svg
var fist_front_default = "./fist-front-5JT7R424.svg";

// assets/hand-icons/horns.svg
var horns_default = "./horns-NB4ZNCFH.svg";

// assets/hand-icons/left-1.svg
var left_1_default = "./left-1-AZIN2LHE.svg";

// assets/hand-icons/left-2.svg
var left_2_default = "./left-2-PIQF7NNE.svg";

// assets/hand-icons/left-3.svg
var left_3_default = "./left-3-36QSU64Y.svg";

// assets/hand-icons/left-4.svg
var left_4_default = "./left-4-CQJO7HVP.svg";

// assets/hand-icons/ok.svg
var ok_default = "./ok-ZOBEV72U.svg";

// assets/hand-icons/peace.svg
var peace_default = "./peace-U5TV3FMN.svg";

// assets/hand-icons/point-back.svg
var point_back_default = "./point-back-F6I5JPGW.svg";

// assets/hand-icons/point-up-front.svg
var point_up_front_default = "./point-up-front-2DIFEMUP.svg";

// assets/hand-icons/raised-double.svg
var raised_double_default = "./raised-double-UNA63L6D.svg";

// assets/hand-icons/raised.svg
var raised_default = "./raised-GRZNSSV4.svg";

// assets/hand-icons/scissors.svg
var scissors_default = "./scissors-KMX5HLPS.svg";

// assets/hand-icons/thumbs-down.svg
var thumbs_down_default = "./thumbs-down-SGGWPI6M.svg";

// assets/hand-icons/thumbs-up.svg
var thumbs_up_default = "./thumbs-up-IJ55DDXJ.svg";

// assets/hand-icons/wave.svg
var wave_default = "./wave-4E6RIETR.svg";

// components/util/icon.tsx
var iconMap = {
  "tina": tina_default,
  "call": call_default,
  "fingers-crossed": fingers_crossed_default,
  "fist-front": fist_front_default,
  "horns": horns_default,
  "left-1": left_1_default,
  "left-2": left_2_default,
  "left-3": left_3_default,
  "left-4": left_4_default,
  "ok": ok_default,
  "peace": peace_default,
  "point-back": point_back_default,
  "point-up-front": point_up_front_default,
  "raised-double": raised_double_default,
  "raised": raised_default,
  "scissors": scissors_default,
  "thumbs-down": thumbs_down_default,
  "thumbs-up": thumbs_up_default,
  "wave": wave_default
};
var formatFieldLabel = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
var iconSchema = {
  type: "string",
  label: "Icon",
  name: "icon",
  options: Object.keys(iconMap).map((icon) => ({
    label: formatFieldLabel(icon),
    value: icon
  }))
};

// components/blocks/columns.tsx
var defaultItem = (label) => ({
  title: `Column ${label}`,
  text: {
    type: "root",
    children: [
      {
        type: "p",
        children: [
          {
            type: "text",
            text: "Column text."
          }
        ]
      }
    ]
  },
  icon: "tina"
});
var columnsBlockSchema = {
  name: "columns",
  label: "Columns",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: () => ({
      items: [defaultItem("a"), defaultItem("b"), defaultItem("c")]
    }),
    itemProps: (item) => ({
      label: item?.heading ? `Columns - ${item.heading}` : "Columns"
    })
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "object",
      label: "Columns",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title || "Column"
          };
        },
        defaultItem: {
          ...defaultItem
        }
      },
      fields: [
        backgroundColorSchema,
        iconSchema,
        {
          type: "string",
          label: "Text Icon",
          name: "textIcon"
        },
        {
          type: "string",
          label: "Title",
          name: "title"
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text",
          parser: {
            type: "mdx"
          }
        }
      ]
    }
  ]
};

// components/blocks/event-list.tsx
import * as React6 from "react";

// tina/__generated__/client.ts
import { createClient as createClient2 } from "tinacms/dist/client";

// tina/__generated__/types.ts
import { createClient } from "tinacms/dist/client";
function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
var GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  __typename
  header {
    __typename
    icon
    color
    nav {
      __typename
      href
      label
    }
  }
}
    `;
var LayoutQueryFragmentFragmentDoc = gql`
    fragment LayoutQueryFragment on Query {
  global(relativePath: "index.json") {
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
var PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  heroImg
  excerpt
  author {
    ... on Author {
      __typename
      name
      avatar
    }
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
  }
  date
  _body
}
    `;
var AuthorPartsFragmentDoc = gql`
    fragment AuthorParts on Author {
  __typename
  name
  avatar
}
    `;
var PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  blocks {
    __typename
    ... on PageBlocksHero {
      heading
      subtitle
      imageLeft {
        __typename
        src
        alt
      }
      iconLeft
      imageRight {
        __typename
        src
        alt
      }
      iconRight
    }
    ... on PageBlocksBasicHero {
      background
      heading
      subtitle
    }
    ... on PageBlocksBroughtToYouBy {
      largeText
    }
    ... on PageBlocksEventList {
      heading
    }
    ... on PageBlocksHr {
      icon
    }
    ... on PageBlocksColumns {
      heading
      items {
        __typename
        background
        icon
        textIcon
        title
        text
      }
    }
    ... on PageBlocksContent {
      background
      body
    }
    ... on PageBlocksCompanies {
      logos {
        __typename
        src
        alt
        width
        height
      }
    }
    ... on PageBlocksQuotes {
      background
      quotes {
        __typename
        quote
        author
        jobTitle
      }
    }
    ... on PageBlocksBigList {
      heading
      items {
        __typename
        indicator
        title
        description
      }
    }
    ... on PageBlocksAccordion {
      heading
      items {
        __typename
        open
        summary
        text
      }
    }
  }
}
    `;
var EventPartsFragmentDoc = gql`
    fragment EventParts on Event {
  __typename
  title
  date
  date_end
  location_short
  location
  status
  sign_up_url
  blocks {
    __typename
    ... on EventBlocksBroughtToYouBy {
      largeText
    }
    ... on EventBlocksHr {
      icon
    }
    ... on EventBlocksColumns {
      heading
      items {
        __typename
        background
        icon
        textIcon
        title
        text
      }
    }
    ... on EventBlocksContent {
      background
      body
    }
    ... on EventBlocksCompanies {
      logos {
        __typename
        src
        alt
        width
        height
      }
    }
    ... on EventBlocksQuotes {
      background
      quotes {
        __typename
        quote
        author
        jobTitle
      }
    }
    ... on EventBlocksBigList {
      heading
      items {
        __typename
        indicator
        title
        description
      }
    }
    ... on EventBlocksHostedBy {
      hosts {
        __typename
        src
        alt
        quote
        name
        job_title
        link_url
        link_text
      }
    }
    ... on EventBlocksTalksBy {
      heading
      hosts {
        __typename
        src
        alt
        quote
        name
        job_title
        link_url
        link_text
      }
    }
    ... on EventBlocksAccordion {
      heading
      items {
        __typename
        open
        summary
        text
      }
    }
  }
}
    `;
var PageQueryDocument = gql`
    query pageQuery {
  ...LayoutQueryFragment
  postConnection {
    edges {
      node {
        id
        _values
        author {
          ... on Author {
            ...AuthorParts
          }
        }
        _sys {
          filename
        }
      }
    }
  }
  eventConnection {
    edges {
      node {
        id
        _values
        _sys {
          filename
        }
      }
    }
  }
}
    ${LayoutQueryFragmentFragmentDoc}
${AuthorPartsFragmentDoc}`;
var ContentQueryDocument = gql`
    query contentQuery($relativePath: String!) {
  ...LayoutQueryFragment
  page(relativePath: $relativePath) {
    ...PageParts
  }
}
    ${LayoutQueryFragmentFragmentDoc}
${PagePartsFragmentDoc}`;
var BlogPostQueryDocument = gql`
    query blogPostQuery($relativePath: String!) {
  ...LayoutQueryFragment
  post(relativePath: $relativePath) {
    ...PostParts
    author {
      ... on Author {
        name
        avatar
      }
    }
  }
}
    ${LayoutQueryFragmentFragmentDoc}
${PostPartsFragmentDoc}`;
var EventQueryDocument = gql`
    query eventQuery($relativePath: String!) {
  ...LayoutQueryFragment
  event(relativePath: $relativePath) {
    ...EventParts
  }
}
    ${LayoutQueryFragmentFragmentDoc}
${EventPartsFragmentDoc}`;
var PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
var PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
var GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
var GlobalConnectionDocument = gql`
    query globalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalFilter) {
  globalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
var AuthorDocument = gql`
    query author($relativePath: String!) {
  author(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...AuthorParts
  }
}
    ${AuthorPartsFragmentDoc}`;
var AuthorConnectionDocument = gql`
    query authorConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: AuthorFilter) {
  authorConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...AuthorParts
      }
    }
  }
}
    ${AuthorPartsFragmentDoc}`;
var PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
var PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
var EventDocument = gql`
    query event($relativePath: String!) {
  event(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...EventParts
  }
}
    ${EventPartsFragmentDoc}`;
var EventConnectionDocument = gql`
    query eventConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: EventFilter) {
  eventConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...EventParts
      }
    }
  }
}
    ${EventPartsFragmentDoc}`;
function getSdk(requester) {
  return {
    pageQuery(variables, options) {
      return requester(PageQueryDocument, variables, options);
    },
    contentQuery(variables, options) {
      return requester(ContentQueryDocument, variables, options);
    },
    blogPostQuery(variables, options) {
      return requester(BlogPostQueryDocument, variables, options);
    },
    eventQuery(variables, options) {
      return requester(EventQueryDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    },
    global(variables, options) {
      return requester(GlobalDocument, variables, options);
    },
    globalConnection(variables, options) {
      return requester(GlobalConnectionDocument, variables, options);
    },
    author(variables, options) {
      return requester(AuthorDocument, variables, options);
    },
    authorConnection(variables, options) {
      return requester(AuthorConnectionDocument, variables, options);
    },
    page(variables, options) {
      return requester(PageDocument, variables, options);
    },
    pageConnection(variables, options) {
      return requester(PageConnectionDocument, variables, options);
    },
    event(variables, options) {
      return requester(EventDocument, variables, options);
    },
    eventConnection(variables, options) {
      return requester(EventConnectionDocument, variables, options);
    }
  };
}
var generateRequester = (client2) => {
  const requester = async (doc, vars, options) => {
    let url = client2.apiUrl;
    if (options?.branch) {
      const index = client2.apiUrl.lastIndexOf("/");
      url = client2.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client2.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
var queries = (client2) => {
  const requester = generateRequester(client2);
  return getSdk(requester);
};

// tina/__generated__/client.ts
var client = createClient2({ cacheDir: "/home/burntcustard/Work/manyhands-tina/tina/__generated__/.cache/1738268902532", url: "https://content.tinajs.io/1.5/content/0064d9a4-e65d-4a88-8310-7f469f0e00ff/github/main", token: "a7cfd0e5925d0bf18f9e48201fc174e53325c39a", queries });

// components/blocks/event-list.tsx
import Link from "next/link";

// components/util/status.tsx
import * as React5 from "react";
var statusMap = {
  "Tickets available soon \u{1F440}": "border-[#FF9325] bg-[#F3EDE0] soon",
  "Filling up fast \u{1F525}": "border-[#FF9325] bg-[#F3EDE0]",
  "Last few places \u{1F631}": "border-pink bg-[#ffdeed]",
  "Fully Booked \u{1F389} (waitlist)": "border-pink bg-[#ffdeed] waitlist",
  "Fully Booked": "full"
};
if ([...new Set(Object.values(statusMap))].length !== Object.keys(statusMap).length) {
  throw new Error("Event statusMap must have unique keys and unique values");
}
var statusSchema = {
  type: "string",
  label: "Status",
  name: "status",
  options: Object.keys(statusMap).map((status) => ({
    label: status,
    value: statusMap[status]
  }))
};

// components/blocks/event-list.tsx
var eventListBlockSchema = {
  name: "eventList",
  label: "Event List",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Next-events"
    }
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    }
  ]
};

// components/blocks/hr.tsx
import * as React7 from "react";
var hrBlockSchema = {
  name: "hr",
  label: "Divider",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      icon: "wave"
    },
    itemProps: (value) => ({
      label: value.icon ? `Divider - ${value.icon[0].toUpperCase() + value.icon.slice(1)}` : "Divider"
    })
  },
  fields: [
    iconSchema
  ]
};

// components/blocks/hero.tsx
import * as React8 from "react";
import Link2 from "next/link";
var prefix2 = process.env.prefix ?? "";
var heroBlockSchema = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "The problem solving event for product people",
      subtitle: "We\u2019re building a community of UX leaders with a passion for helping solve real-world product issues.",
      iconLeft: "tina",
      iconRight: "tina"
    }
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    },
    {
      type: "object",
      label: "Image Left",
      name: "imageLeft",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    },
    {
      ...iconSchema,
      label: "Icon Left",
      name: "iconLeft"
    },
    {
      type: "object",
      label: "Image Right",
      name: "imageRight",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string"
        }
      ]
    },
    {
      ...iconSchema,
      label: "Icon Right",
      name: "iconRight"
    }
  ]
};

// components/blocks/companies.tsx
import React9 from "react";
var companiesBlockSchema = {
  name: "companies",
  label: "Company Logos",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      logos: []
    }
  },
  fields: [
    {
      type: "object",
      label: "Company Logos",
      name: "logos",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.alt ?? "Company Logo"
        })
      },
      fields: [
        {
          name: "src",
          label: "Logo Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Logo Alt Text",
          type: "string"
        },
        {
          name: "width",
          label: "Width (px)",
          type: "number"
        },
        {
          name: "height",
          label: "Height (px)",
          type: "number"
        }
      ]
    }
  ]
};

// components/blocks/quotes.tsx
import React10, { useEffect, useRef, useState } from "react";
var prefix3 = process.env.prefix ?? "";
var defaultQuote = {
  quote: "Thank you for introducing me to these inspiring and interesting people! I really enjoyed it.",
  author: "Magdalena R.",
  jobTitle: "Product Designer"
};
var quotesBlockSchema = {
  name: "quotes",
  label: "Quotes",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quotes: [defaultQuote]
    }
  },
  fields: [
    backgroundColorSchema,
    {
      type: "object",
      label: "Quotes",
      name: "quotes",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.author
          };
        },
        defaultItem: {
          ...defaultQuote
        }
      },
      fields: [
        {
          type: "string",
          ui: {
            component: "textarea"
          },
          label: "Quote",
          name: "quote"
        },
        {
          type: "string",
          label: "Author",
          name: "author"
        },
        {
          type: "string",
          label: "Job Title",
          name: "jobTitle"
        }
      ]
    }
  ]
};

// components/blocks/big-list.tsx
import React11 from "react";
var bigListBlockSchema = {
  name: "bigList",
  label: "Big List",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {}
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "object",
      label: "List Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: (item?.indicator ? `${item?.indicator} ` : "") + item?.title
        })
      },
      fields: [
        {
          name: "indicator",
          label: "Indicator",
          type: "string"
        },
        {
          name: "title",
          label: "Title",
          type: "string"
        },
        {
          name: "description",
          label: "Description",
          type: "string"
        }
      ]
    }
  ]
};

// components/blocks/hosted-by.tsx
import React12 from "react";
var defaultItem2 = {
  name: "Lighthouse Person",
  job_title: "Designer",
  quote: ""
};
var hostedByBlockSchema = {
  name: "hostedBy",
  label: "Hosted By",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      items: [defaultItem2, defaultItem2]
    }
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
            label: host?.name
          };
        },
        defaultItem: {
          ...defaultItem2
        }
      },
      fields: [
        {
          name: "src",
          label: "Profile Picture Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Profile Picture Alt Text",
          type: "string"
        },
        {
          type: "string",
          label: "Quote",
          name: "quote"
        },
        {
          type: "string",
          label: "Name",
          name: "name"
        },
        {
          type: "string",
          label: "Job Title",
          name: "job_title"
        },
        {
          type: "string",
          label: "Link URL",
          name: "link_url"
        },
        {
          type: "string",
          label: "Link Text",
          name: "link_text"
        }
      ]
    }
  ]
};

// components/blocks/talks-by.tsx
import React13 from "react";
var defaultItem3 = {
  name: "",
  job_title: "",
  quote: ""
};
var talksByBlockSchema = {
  name: "talksBy",
  label: "Talks By",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      heading: "Talks from the best in the business",
      hosts: [defaultItem3, defaultItem3]
    }
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "object",
      label: "Hosts",
      name: "hosts",
      list: true,
      ui: {
        itemProps: (host) => {
          return {
            label: host?.name
          };
        },
        defaultItem: {
          ...defaultItem3
        }
      },
      fields: [
        {
          name: "src",
          label: "Profile Picture Source",
          type: "image"
        },
        {
          name: "alt",
          label: "Profile Picture Alt Text",
          type: "string"
        },
        {
          type: "string",
          label: "Quote",
          name: "quote"
        },
        {
          type: "string",
          label: "Name",
          name: "name"
        },
        {
          type: "string",
          label: "Job Title",
          name: "job_title"
        },
        {
          type: "string",
          label: "Link URL",
          name: "link_url"
        },
        {
          type: "string",
          label: "Link Text",
          name: "link_text"
        }
      ]
    }
  ]
};

// components/blocks/hero-basic.tsx
import * as React14 from "react";
var prefix4 = process.env.prefix ?? "";
var basicHeroBlockSchema = {
  name: "basicHero",
  label: "Basic Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      heading: "Bring ManyHands to your team",
      subtitle: "Harness the power of creativity with our workshops for corporate teams based on our highly rated public events."
    }
  },
  fields: [
    backgroundColorSchema,
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "string",
      label: "Subtitle",
      name: "subtitle"
    }
  ]
};

// components/blocks/accordion.tsx
import React15 from "react";
import { TinaMarkdown as TinaMarkdown4 } from "tinacms/dist/rich-text";
var accordionBlockSchema = {
  name: "accordion",
  label: "Accordion",
  ui: {
    previewSrc: "/blocks/testimonial.png"
  },
  fields: [
    {
      type: "string",
      label: "Heading",
      name: "heading"
    },
    {
      type: "object",
      label: "Accordion Items",
      name: "items",
      list: true,
      ui: {
        itemProps: (value) => ({
          label: getRichTextItemLabel(value.summary) || "Item"
        }),
        defaultItem: {
          open: true
        }
      },
      fields: [
        {
          name: "open",
          label: "Initially Open",
          type: "boolean"
        },
        {
          name: "summary",
          label: "Title",
          type: "rich-text",
          parser: {
            type: "mdx"
          }
        },
        {
          type: "rich-text",
          label: "Text",
          name: "text",
          parser: {
            type: "mdx"
          }
        }
      ]
    }
  ]
};

// tina/config.tsx
var currentDateString = (/* @__PURE__ */ new Date()).toLocaleString("default", { day: "numeric", month: "long", year: "numeric" });
var config = defineStaticConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.HEAD,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads"
    }
  },
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Blog Posts",
        name: "post",
        path: "content/posts",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            return `/post/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true
          },
          {
            type: "image",
            name: "heroImg",
            label: "Hero Image"
          },
          {
            type: "rich-text",
            label: "Excerpt",
            name: "excerpt"
          },
          {
            type: "reference",
            label: "Author",
            name: "author",
            collections: ["author"]
          },
          {
            type: "datetime",
            label: "Posted Date",
            name: "date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A"
            }
          },
          {
            type: "rich-text",
            label: "Body",
            name: "_body",
            templates: [
              {
                name: "DateTime",
                label: "Date & Time",
                inline: true,
                fields: [
                  {
                    name: "format",
                    label: "Format",
                    type: "string",
                    options: ["utc", "iso", "local"]
                  }
                ]
              },
              {
                name: "BlockQuote",
                label: "Block Quote",
                fields: [
                  {
                    name: "children",
                    label: "Quote",
                    type: "rich-text"
                  },
                  {
                    name: "authorName",
                    label: "Author",
                    type: "string"
                  }
                ]
              },
              {
                name: "NewsletterSignup",
                label: "Newsletter Sign Up",
                fields: [
                  {
                    name: "children",
                    label: "CTA",
                    type: "rich-text"
                  },
                  {
                    name: "placeholder",
                    label: "Placeholder",
                    type: "string"
                  },
                  {
                    name: "buttonText",
                    label: "Button Text",
                    type: "string"
                  },
                  {
                    name: "disclaimer",
                    label: "Disclaimer",
                    type: "rich-text"
                  }
                ],
                ui: {
                  defaultItem: {
                    placeholder: "Enter your email",
                    buttonText: "Notify Me"
                  }
                }
              }
            ],
            isBody: true
          }
        ]
      },
      {
        label: "Global",
        name: "global",
        path: "content/global",
        format: "json",
        ui: {
          global: true
        },
        fields: [
          {
            type: "object",
            label: "Header",
            name: "header",
            fields: [
              iconSchema,
              {
                type: "string",
                label: "Color",
                name: "color",
                options: [
                  { label: "Default", value: "default" },
                  { label: "Primary", value: "primary" }
                ]
              },
              {
                type: "object",
                label: "Nav Links",
                name: "nav",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.label };
                  },
                  defaultItem: {
                    href: "home",
                    label: "Home"
                  }
                },
                fields: [
                  {
                    type: "string",
                    label: "Link",
                    name: "href"
                  },
                  {
                    type: "string",
                    label: "Label",
                    name: "label"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Authors",
        name: "author",
        path: "content/authors",
        format: "md",
        fields: [
          {
            type: "string",
            label: "Name",
            name: "name",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            label: "Avatar",
            name: "avatar"
          }
        ]
      },
      {
        label: "Pages",
        name: "page",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            if (document._sys.filename === "about") {
              return `/about`;
            }
            return `/${document._sys.filename}`;
          }
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true
            },
            templates: [
              heroBlockSchema,
              basicHeroBlockSchema,
              broughtToYouByBlockSchema,
              eventListBlockSchema,
              hrBlockSchema,
              columnsBlockSchema,
              contentBlockSchema,
              companiesBlockSchema,
              quotesBlockSchema,
              bigListBlockSchema,
              accordionBlockSchema
            ]
          }
        ]
      },
      {
        name: "event",
        label: "Events",
        path: "content/events",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/event/${document._sys.filename}`;
          }
        },
        defaultItem: {
          date: `${currentDateString} 6:00 PM`,
          date_end: `${currentDateString} 7:00 PM`
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            label: "Event Date & Time (Start)",
            name: "date",
            required: true,
            ui: {
              dateFormat: "D MMMM YYYY",
              timeFormat: "h:mm A"
            }
          },
          {
            type: "datetime",
            label: "Event Date & Time (End)",
            name: "date_end",
            required: false,
            ui: {
              dateFormat: "D MMMM YYYY",
              timeFormat: "h:mm A"
            }
          },
          {
            type: "string",
            label: "Location (short)",
            name: "location_short"
          },
          {
            type: "string",
            label: "Location (full)",
            name: "location",
            ui: {
              component: "textarea"
            }
          },
          statusSchema,
          {
            type: "string",
            label: "Sign up URL",
            name: "sign_up_url"
          },
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            ui: {
              visualSelector: true
            },
            templates: [
              broughtToYouByBlockSchema,
              hrBlockSchema,
              columnsBlockSchema,
              contentBlockSchema,
              companiesBlockSchema,
              quotesBlockSchema,
              bigListBlockSchema,
              hostedByBlockSchema,
              talksByBlockSchema,
              accordionBlockSchema
            ]
          }
        ]
      }
    ]
  }
});
var config_default = config;
export {
  config_default as default
};
