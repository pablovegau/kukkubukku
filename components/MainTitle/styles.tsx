import styled from 'styled-components'
import { typography } from 'styles/mixins/typography'

export const Container = styled.h1`
  color: var(--kkbk--color--title--main);
  font-family: var(--kkbk--font--title);
  text-align: left;

  @media screen and (min-width: 1024px) {
    text-align: center;
  }

  ${typography.heading.three}
`
