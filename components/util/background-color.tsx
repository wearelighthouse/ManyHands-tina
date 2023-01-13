import type { SchemaField } from "tinacms";

export const backgroundColorsMap = {
  'Gray': 'bg-light-gray',
}

export const backgroundColorSchema: SchemaField = {
  type: "string",
  label: "Background Color",
  name: "background",
  options: Object.keys(backgroundColorsMap).map((key) => ({
    label: key,
    value: backgroundColorsMap[key],
  })),
};
