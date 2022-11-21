import styled from 'styled-components'
import { typography } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Value = styled.span`
  margin-left: var(--kkbk--spacing--4);
  margin-top: 2px;
  color: var(--kkbk--color--text--primary);
  ${typography.text.bold.mini}
`
