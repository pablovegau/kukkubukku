import { css } from "styled-components";

const SEPARATOR = "--";

const TOKENS_TYPES = {
  THEME: "theme"
};

function isObject(obj) {
  return !!(typeof obj === "object");
}

function transformTokensToString(tokensObject) {
  return Object.entries(tokensObject)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}

function processThemeTokens(prefix, tokens, tokensAcc, themesTokens) {
  for (const key in tokens) {
    if (isObject(tokens[key])) {
      processThemeTokens(
        prefix + SEPARATOR + key.replace("_", "-").toLowerCase(),
        tokens[key],
        tokensAcc,
        themesTokens
      );
    } else {
      themesTokens[`${key.toLowerCase()}`][prefix] = tokens[key];
    }
  }
}

function processBaseTokens(prefix, tokens, tokensAcc) {
  for (const key in tokens) {
    const newPrefix = prefix + SEPARATOR + key.replace("_", "-").toLowerCase();
    if (isObject(tokens[key])) {
      processBaseTokens(newPrefix, tokens[key], tokensAcc);
    } else {
      tokensAcc[newPrefix] = tokens[key];
    }
  }
}

function getThemeTokens(tokens, themes) {
  const tokensAcc = {};
  let themesTokens = {};

  for (const theme in themes) {
    themesTokens[`${themes[theme]}`] = {};
  }

  processThemeTokens("--kkbk", tokens, tokensAcc, themesTokens);

  let allThemesTokens = "";

  for (const themeKey in themesTokens) {
    allThemesTokens += `
        body[data-theme="${themeKey}"] {
          ${transformTokensToString(themesTokens[themeKey])}
        }
      `;
  }

  return css`
    ${allThemesTokens}
  `;
}

function getBaseTokens(tokens) {
  let tokensAcc = {};
  processBaseTokens("--kkbk", tokens, tokensAcc);

  return css`
    :root {
      ${transformTokensToString(tokensAcc)}
    }
  `;
}

export function getTokens(tokens, type, themes) {
  return type === TOKENS_TYPES.THEME
    ? getThemeTokens(tokens, themes)
    : getBaseTokens(tokens);
}
