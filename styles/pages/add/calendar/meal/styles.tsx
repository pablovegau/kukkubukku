import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
`

export const TemporaryMessage = styled.p`
  margin-bottom: var(--kkbk--spacing--24);
  color: var(--kkbk--color--text--dim);
  ${typography.text.small}
`

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
