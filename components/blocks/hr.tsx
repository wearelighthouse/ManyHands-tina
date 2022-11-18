import * as React from "react";
import type { Template } from "tinacms";
import { iconSchema, Icon } from "../util/icon";

import WavingSvg from "../../assets/hand-icons/waving.svg";

export const Hr = ({ data, parentField }) => {
  // TODO: Put the selected icon into here somehow
  // console.log(WavingSvg());

{/* <hr className="manyhands-hr mx-4 my-20" style={{['--icon' as any]: `url(data:image/svg+xml;utf8,${WavingSvg()})`}}/> */}

  return (
    <hr className={`manyhands-hr manyhands-hr--${data.icon} mx-4 my-20`}/>
  );
};

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
