import styled from 'styled-components'
import { getThemeTransition } from '../../styles/utils'
import { typography } from '../../styles/mixins'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 261px;
  margin-bottom: var(--kkbk--spacing--24);
`

export const Month = styled.h2`
  margin-bottom: calc(var(--kkbk--spacing--4) * -1);
  color: var(--kkbk--color--text--primary);
  font-family: var(--kkbk--font--title);
  ${typography.heading.five}

  transition: ${getThemeTransition({ properties: 'color' })};
`

export const HeadCell = styled.div`
  line-height: 33px;
  width: 33px;
  height: 33px;
  color: var(--kkbk--color--text--primary);

  transition: ${getThemeTransition({ properties: 'color' })};
`

interface BodyCellProps {
  isSelected?: boolean
  hasEvent?: boolean
}

export const BodyCell = styled.div<BodyCellProps>`
  height: 33px;
  border-radius: 50%;
  background-color: ${(p) => p.hasEvent && 'var(--kkbk--base-color--quartenary--light)'};
  background-color: ${(p) => p.isSelected && 'var(--kkbk--color--emphasis--secondary)'};
  color: ${(p) => (p.isSelected ? 'var(--kkbk--base-color--gray--90)' : 'var(--kkbk--color--text--primary)')};
  line-height: 33px;
  text-align: center;
  cursor: default;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: var(--kkbk--component--color--background--calendar--hover);
    color: var(--kkbk--base-color--gray--90);
  }
`
