import * as React from "react";
import type { Template } from "tinacms";
import { iconSchema } from "../util/icon";

export const Hr = ({ data, parentField }) => (
  // TODO: Put the selected icon into here somehow
  <hr className="manyhands-hr mx-4 my-20"/>
);

export const hrBlockSchema: Template = {
  name: "hr",
  label: "Divider",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      icon: {
        name: "",
      },
    },
  },
  fields: [
    iconSchema,
  ],
};
