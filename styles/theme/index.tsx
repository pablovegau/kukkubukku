import { css } from "styled-components";
import {
  baseColorsTokens,
  colorsTokens,
  componentColorsTokens,
  spacingTokens
} from "./tokens";

export const theme = css`
  ${baseColorsTokens}
  ${colorsTokens}
  ${componentColorsTokens}
  ${spacingTokens}
`;
