import * as React from "react";
import TinaIconSvg from "../../public/tina.svg";
import type { TinaField } from "tinacms";

const iconOptions = {
  tina: { bi: TinaIconSvg, hi: TinaIconSvg },
};

const iconSizeClass = {
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-14 h-14",
};

export const Icon = ({
  data,
  className = "",
  tinaField = "",
}) => {
  const iconName = data.name || Object.keys(iconOptions)[0];
  // const IconSVG = ???

  const iconSizeClasses = data.size && iconSizeClass[data.size];

  return (
    // <IconSVG
    //   data-tinafield={tinaField}
    //   className={`${iconSizeClasses} ${className}`}
    // />
    <div></div>
  );
};

const formatFieldLabel = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const iconSchema: TinaField = {
  type: "object",
  label: "Icon",
  name: "icon",
  fields: [
    {
      type: "string",
      label: "Icon",
      name: "name",
      options: Object.keys(iconOptions).map((icon) => ({
        label: formatFieldLabel(icon),
        value: icon,
      })),
    },
  ],
};
