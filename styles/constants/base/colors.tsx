import { lighten, darken, rgba } from 'polished'

const baseColors = {
  colorOne: '#998CEB',
  colorTwo: '#77E4D4',
  colorThree: '#B4FE98',
  colorFour: '#FBF46D',
}

export const colors = {
  primary: {
    main: baseColors.colorOne,
    light: `${lighten(0.1, baseColors.colorOne)};`,
    dark: `${darken(0.15, baseColors.colorOne)};`,
  },
  secondary: {
    main: baseColors.colorTwo,
    light: `${lighten(0.1, baseColors.colorTwo)};`,
    dark: `${darken(0.2, baseColors.colorTwo)};`,
  },
  terciary: {
    main: baseColors.colorThree,
    light: `${lighten(0.05, baseColors.colorThree)};`,
    dark: `${darken(0.2, baseColors.colorThree)};`,
  },
  quartenary: {
    main: baseColors.colorFour,
    light: `${lighten(0.1, baseColors.colorFour)};`,
    dark: `${darken(0.2, baseColors.colorFour)};`,
  },
}

export const transparentColors = {
  primary: {
    five: `${rgba(colors.primary.main, 0.05)}`,
    twenty: `${rgba(colors.primary.main, 0.2)}`,
    fifty: `${rgba(colors.primary.main, 0.5)}`,
    eighty: `${rgba(colors.primary.main, 0.8)}`,
  },
  secondary: {
    five: `${rgba(colors.secondary.main, 0.05)}`,
    twenty: `${rgba(colors.secondary.main, 0.2)}`,
    fifty: `${rgba(colors.secondary.main, 0.5)}`,
    eighty: `${rgba(colors.secondary.main, 0.8)}`,
  },
  terciary: {
    five: `${rgba(colors.terciary.main, 0.05)}`,
    twenty: `${rgba(colors.terciary.main, 0.2)}`,
    fifty: `${rgba(colors.terciary.main, 0.5)}`,
    eighty: `${rgba(colors.terciary.main, 0.8)}`,
  },
  quartenary: {
    five: `${rgba(colors.quartenary.main, 0.05)}`,
    twenty: `${rgba(colors.quartenary.main, 0.2)}`,
    fifty: `${rgba(colors.quartenary.main, 0.5)}`,
    eighty: `${rgba(colors.quartenary.main, 0.8)}`,
  },
}

export const statusColors = {
  error: '#DF2D24',
  errorHover: '#B00F0A',
}

export const brandColors = {
  google: '#DB4437',
}

export const gradientColors = {
  primary_secondary: {
    main: `linear-gradient(149.51deg, ${colors.primary.main} 21.11%, ${colors.secondary.main} 82.81%)`,
    // dark: `linear-gradient(122.31deg, #00879f 21.11%, #008a82 82.81%)`,
    // tri: `linear-gradient(146.89deg, ${colors.greenDarkWater.main} 10.23%, ${colors.greenForest.main} 42.08%, ${colors.greenForest.main} 57.4%, ${colors.greenDarkWater.main} 87.64%);`,
  },
}
