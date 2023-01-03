import * as React from "react";
import type { SchemaField } from "tinacms";

export const statusMap = {
  'Filling up fast 🔥': 'border-[#FF9325] bg-[#F3EDE0]',
  'Last few places 😱': 'border-pink bg-[#ffdeed]',
}

interface statusProps {
  children: string;
  className?: string;
  greyscale?: boolean;
}

export const Status = ({ children, className = '', greyscale = false }: statusProps) => (
  <span
    className={`uppercase rounded-full px-3 font-medium leading-6 ${greyscale ? 'text-md border-[3px]' : 'text-sm border-2'} ${greyscale ? 'border-[transparent] bg-smoke/10' : children} ${className}`}
  >
    {Object.keys(statusMap).find(key => statusMap[key] === children)}
  </span>
);

export const statusSchema: SchemaField = {
  type: "string",
  label: "Status",
  name: "status",
  options: Object.keys(statusMap).map((status) => ({
    label: status,
    value: statusMap[status],
  })),
};
