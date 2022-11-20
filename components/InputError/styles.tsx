import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.p`
  width: fit-content;
  padding: 3px 6px 2px 6px;
  border-radius: var(--kkbk--spacing--4);
  margin-top: var(--kkbk--spacing--4);
  background-color: rgba(223, 45, 36, 0.1);
  color: var(--kkbk--status-color--error);

  ${typography.text.small}
`

export const Label = styled.span`
  font-weight: 600;
`
