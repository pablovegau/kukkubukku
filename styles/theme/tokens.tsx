import {
  application,
  spacingValues,
  baseColorsValues,
  colorsValues,
  componentColorsValues
} from "../constants";
import { getTokens } from "./utils";

export const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

const applicationTokens = getTokens(application);
const baseColorsTokens = getTokens(baseColorsValues);
const colorsTokens = getTokens(colorsValues, "theme", THEMES);
const componentColorsTokens = getTokens(componentColorsValues, "theme", THEMES);
const spacingTokens = getTokens(spacingValues);

export { applicationTokens, baseColorsTokens, colorsTokens, componentColorsTokens, spacingTokens };
