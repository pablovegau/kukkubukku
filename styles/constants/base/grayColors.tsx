import { lighten, rgba } from "polished";

const black = "#000000";

export const grayColors = {
  black: black,
  black90: lighten(0.1, black),
  black80: lighten(0.2, black),
  black70: lighten(0.3, black),
  black60: lighten(0.4, black),
  black50: lighten(0.5, black),
  black40: lighten(0.6, black),
  black30: lighten(0.7, black),
  black20: lighten(0.8, black),
  black10: lighten(0.9, black),
  black5: lighten(0.95, black),
  black2: lighten(0.98, black),
  white: lighten(1, black)
};

export const transparentGrayColors = {
  five: `${rgba(grayColors.black, 0.05)}`,
  twenty: `${rgba(grayColors.black, 0.2)}`,
  thirty: `${rgba(grayColors.black, 0.3)}`,
  fifty: `${rgba(grayColors.black, 0.5)}`,
  eighty: `${rgba(grayColors.black, 0.8)}`
};
