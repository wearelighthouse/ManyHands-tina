import * as React from "react";
import type { SchemaField } from "tinacms";

import TinaIconSvg from "../../assets/img/tina.svg";
import CallSvg from "../../assets/hand-icons/call.svg";
import FingersCrossedSvg from "../../assets/hand-icons/fingers-crossed.svg";
import FistFrontSvg from "../../assets/hand-icons/fist-front.svg";
import HornsSvg from "../../assets/hand-icons/horns.svg";
import Left1Svg from "../../assets/hand-icons/left-1.svg";
import Left2Svg from "../../assets/hand-icons/left-2.svg";
import Left3Svg from "../../assets/hand-icons/left-3.svg";
import Left4Svg from "../../assets/hand-icons/left-4.svg";
import OkSvg from "../../assets/hand-icons/ok.svg";
import PeaceSvg from "../../assets/hand-icons/peace.svg";
import PointBackSvg from "../../assets/hand-icons/point-back.svg";
import PointUpFrontSvg from "../../assets/hand-icons/point-up-front.svg";
import RaisedDoubleSvg from "../../assets/hand-icons/raised-double.svg";
import RaisedSvg from "../../assets/hand-icons/raised.svg";
import ScissorsSvg from "../../assets/hand-icons/scissors.svg";
import ThumbsDownSvg from "../../assets/hand-icons/thumbs-down.svg";
import ThumbsUpSvg from "../../assets/hand-icons/thumbs-up.svg";
import WaveSvg from "../../assets/hand-icons/wave.svg";

export const iconMap = {
  'tina': TinaIconSvg,
  'call': CallSvg,
  'fingers-crossed': FingersCrossedSvg,
  'fist-front': FistFrontSvg,
  'horns': HornsSvg,
  'left-1': Left1Svg,
  'left-2': Left2Svg,
  'left-3': Left3Svg,
  'left-4': Left4Svg,
  'ok': OkSvg,
  'peace': PeaceSvg,
  'point-back': PointBackSvg,
  'point-up-front': PointUpFrontSvg,
  'raised-double': RaisedDoubleSvg,
  'raised': RaisedSvg,
  'scissors': ScissorsSvg,
  'thumbs-down': ThumbsDownSvg,
  'thumbs-up': ThumbsUpSvg,
  'wave': WaveSvg,
};

export const Icon = ({
  data,
  className = "",
  tinaField = "",
}) => {
  const iconName = data.icon || Object.keys(iconMap)[0];
  const IconSVG = iconMap[iconName];

  return (
    <IconSVG
      // All icons are hidden, for now. Alt text would be good.
      aria-hidden="true"
      data-tinafield={tinaField}
      className={className}
    />
  );
};

const formatFieldLabel = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const iconSchema: SchemaField = {
  type: "string",
  label: "Icon",
  name: "icon",
  options: Object.keys(iconMap).map((icon) => ({
    label: formatFieldLabel(icon),
    value: icon,
  })),
};
