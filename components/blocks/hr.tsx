import * as React from "react";
import type { Template } from "tinacms";
import { iconSchema } from "../util/icon";

export const Hr = ({ data, parentField }) => (
  <hr
    data-tinafield={`${parentField}.icon`}
    className={`manyhands-hr manyhands-hr--${data.icon} mx-4 my-20 tablet:my-32`}
  />
);

export const hrBlockSchema: Template = {
  name: "hr",
  label: "Divider",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      icon: "wave",
    },
    itemProps: (value) => ({
      label: value.icon ? `Divider - ${value.icon[0].toUpperCase() + value.icon.slice(1)}` : 'Divider',
    }),
  },
  fields: [
    iconSchema,
  ],
};
