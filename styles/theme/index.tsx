import { css } from 'styled-components'
import {
  applicationTokens,
  baseColorsTokens,
  colorsTokens,
  componentColorsTokens,
  spacingTokens,
} from './tokens'

export const theme = css`
  ${applicationTokens}
  ${baseColorsTokens}
  ${colorsTokens}
  ${componentColorsTokens}
  ${spacingTokens}
`
