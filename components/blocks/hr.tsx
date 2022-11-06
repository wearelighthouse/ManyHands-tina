import * as React from "react";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";

export const Hr = ({ data, parentField }) => (
  // TODO: Put the selected icon into here somehow
  <hr className="manyhands-hr mx-4"/>
);

export const hrBlockSchema: TinaTemplate = {
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
