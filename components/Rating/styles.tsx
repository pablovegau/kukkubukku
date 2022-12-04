// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styled from 'styled-components'
import { typography } from '../../styles/mixins'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

interface ValueProps {
  size: string
}

const TEXT_SIZES = {
  small: typography.text.bold.mini,
  medium: typography.text.bold.medium,
}

export const Value = styled.span<ValueProps>`
  margin-left: var(--kkbk--spacing--4);
  margin-top: 2px;
  color: var(--kkbk--color--text--primary);
  ${({ size }) => TEXT_SIZES[size]}
`
