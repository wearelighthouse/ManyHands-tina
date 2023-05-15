import type { TinaField } from "tinacms";

export const backgroundColorsMap = {
  'Blue': 'bg-iceberg',
  'Gray': 'bg-light-gray',
  'Pink': 'bg-light-pink',
  'Yellow': 'bg-mimosa',
}

export const backgroundColorSchema: TinaField = {
  type: "string",
  label: "Background Color",
  name: "background",
  options: Object.keys(backgroundColorsMap).map((key) => ({
    label: key,
    value: backgroundColorsMap[key],
  })),
};
