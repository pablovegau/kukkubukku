// TODO: Fix typescript errors

import { css } from 'styled-components'

const SEPARATOR = '--'

const TOKENS_TYPES = {
  THEME: 'theme',
}

// interface Themes {
//   [key: string]: string;
// }

// interface Tokens {
//   [key: string]: Tokens;
// }

function isObject(obj: any) {
  return !!(typeof obj === 'object')
}

function transformTokensToString(tokensObject: any) {
  return Object.entries(tokensObject)
    .map(([key, value]) => `${key}: ${value}`)
    .join('; ')
}

function processThemeTokens(
  prefix: any,
  tokens: any,
  tokensAcc: any,
  themesTokens: any
) {
  for (const key in tokens) {
    if (isObject(tokens[key])) {
      processThemeTokens(
        prefix + SEPARATOR + key.replace('_', '-').toLowerCase(),
        tokens[key],
        tokensAcc,
        themesTokens
      )
    } else {
      themesTokens[`${key.toLowerCase()}`][prefix] = tokens[key]
    }
  }
}

function processBaseTokens(prefix: any, tokens: any, tokensAcc: any) {
  for (const key in tokens) {
    const newPrefix = prefix + SEPARATOR + key.replace('_', '-').toLowerCase()
    if (isObject(tokens[key])) {
      processBaseTokens(newPrefix, tokens[key], tokensAcc)
    } else {
      tokensAcc[newPrefix] = tokens[key]
    }
  }
}

interface ThemesTokens {
  [key: string]: string | ThemesTokens
}

function getThemeTokens(tokens: any, themes: any) {
  const tokensAcc = {}
  let themesTokens: ThemesTokens = {}

  for (const theme in themes) {
    themesTokens[`${themes[theme]}`] = {}
  }

  processThemeTokens('--kkbk', tokens, tokensAcc, themesTokens)

  let allThemesTokens = ''

  for (const themeKey in themesTokens) {
    allThemesTokens += `
        body[data-theme="${themeKey}"] {
          ${transformTokensToString(themesTokens[themeKey])}
        }
      `
  }

  return css`
    ${allThemesTokens}
  `
}

function getBaseTokens(tokens: any) {
  let tokensAcc = {}
  processBaseTokens('--kkbk', tokens, tokensAcc)

  return css`
    :root {
      ${transformTokensToString(tokensAcc)}
    }
  `
}

export function getTokens(tokens: any, type?: any, themes?: any) {
  return type === TOKENS_TYPES.THEME && themes
    ? getThemeTokens(tokens, themes)
    : getBaseTokens(tokens)
}
