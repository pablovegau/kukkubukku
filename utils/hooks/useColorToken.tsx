// TODO: Fix Typescript errors
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { allValues } from '../../styles/constants/values'

interface Values {
  [key: string]: string
}

// receives a string like 'color.emphasis.primary.light'
// return the value for this token
export const useColorToken = (token: string) => {
  const tokenArray = token.split('.').map((key) => key.toUpperCase().replace('-', '_'))

  let colorToken: Values = allValues

  for (let i = 0; i < tokenArray.length; i++) {
    colorToken = colorToken[tokenArray[i]]
  }

  // The final value of colorToken has a ';' at the end
  // the replace function deletes the ';'
  return colorToken.replace(';', '')
}
