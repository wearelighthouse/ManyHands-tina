import * as React from "react";
import type { Template } from "tinacms";
import { iconSchema } from "../util/icon";

export const Hr = ({ data }) => (
  <hr className={`manyhands-hr manyhands-hr--${data.icon} mx-4 my-20`}/>
);

export const hrBlockSchema: Template = {
  name: "hr",
  label: "Divider",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      icon: "wave",
    },
  },
  fields: [
    iconSchema,
  ],
};
