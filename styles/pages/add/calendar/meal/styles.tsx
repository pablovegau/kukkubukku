import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
`

export const TemporaryMessage = styled.p`
  margin-top: var(--kkbk--spacing--8);
  color: var(--kkbk--color--text--dim);
  ${typography.text.small}
`
