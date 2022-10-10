import {
  spacingValues,
  baseColorsValues,
  colorsValues,
  componentColorsValues
} from "../constants";
import { getTokens } from "./utils";

const THEMES = {
  LIGHT: "light",
  DARK: "dark"
};

const baseColorsTokens = getTokens(baseColorsValues);
const colorsTokens = getTokens(colorsValues, "theme", THEMES);
const componentColorsTokens = getTokens(componentColorsValues, "theme", THEMES);
const spacingTokens = getTokens(spacingValues);

export { baseColorsTokens, colorsTokens, componentColorsTokens, spacingTokens };
