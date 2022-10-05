import { css } from "styled-components";

const fontSizes = {
  "80": "5em",
  "60": "3.75em",
  "30": "1.875em",
  "24": "1.5em",
  "20": "1.25em",
  "18": "1.125em",
  "16": "1em",
  "14": "0.875em",
  "12": "0.75em",
  "10": "0.625em"
};

const appLineHeightDefault = `140%`;
const appLineHeightSmall = `120%`;

export const typography = {
  heading: {
    one: () => css`
      font-size: ${fontSizes["80"]};
      font-weight: 700;
      line-height: ${appLineHeightSmall};
    `,
    two: () => css`
      font-size: ${fontSizes["60"]};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    three: () => css`
      font-size: ${fontSizes["30"]};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    four: () => css`
      font-size: ${fontSizes["24"]};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `,
    five: () => css`
      font-size: ${fontSizes["20"]};
      font-weight: 700;
      line-height: ${appLineHeightDefault};
    `
  },
  text: {
    extraLarge: () => css`
      font-size: ${fontSizes["24"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    large: () => css`
      font-size: ${fontSizes["20"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    medium: () => css`
      font-size: ${fontSizes["18"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    base: () => css`
      font-size: ${fontSizes["16"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    small: () => css`
      font-size: ${fontSizes["14"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    mini: () => css`
      font-size: ${fontSizes["12"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    micro: () => css`
      font-size: ${fontSizes["10"]};
      font-weight: 400;
      line-height: ${appLineHeightDefault};
    `,
    bold: {
      extraLarge: () => css`
        font-size: ${fontSizes["24"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      large: () => css`
        font-size: ${fontSizes["20"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      medium: () => css`
        font-size: ${fontSizes["18"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      base: () => css`
        font-size: ${fontSizes["16"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      small: () => css`
        font-size: ${fontSizes["14"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      mini: () => css`
        font-size: ${fontSizes["12"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `,
      micro: () => css`
        font-size: ${fontSizes["10"]};
        font-weight: 700;
        line-height: ${appLineHeightDefault};
      `
    }
  }
};
