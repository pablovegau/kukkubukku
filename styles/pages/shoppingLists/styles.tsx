import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  height: 100%;
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
`

export const NoShoppingLists = styled.div`
  text-align: center;

  ${typography.heading.four}
`
