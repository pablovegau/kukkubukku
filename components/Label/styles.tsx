import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.label`
  margin-bottom: var(--kkbk--spacing--4);
  color: var(--kkbk--color--text--primary);

  ${typography.text.base}
`

export const AdditionalText = styled.span`
  margin-left: var(--kkbk--spacing--8);
  color: var(--kkbk--color--text--dim);

  ${typography.text.mini}
`
