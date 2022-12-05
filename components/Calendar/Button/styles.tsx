import { Button } from 'ariakit/button'
import styled from 'styled-components'
import { rem } from 'polished'

export const Container = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem('40px')};
  width: ${rem('40px')};
  border: none;
  border-radius: ${rem('4px')};
  font-size: 1rem;
  transition: background-color 300ms, color 300ms, border-color 300ms;

  background-color: var(--kkbk--component--color--background--button--plain--enabled);
  color: var(--kkbk--component--color--text--button--plain--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid var(--kkbk--component--color--background--button--plain--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(--kkbk--component--color--background--button--plain--hover);
    color: var(--kkbk--component--color--text--button--plain--hover);
  }

  &[aria-disabled='true'],
  &[aria-disabled='true']:hover {
    background-color: var(--kkbk--component--color--background--button--disabled);
    color: var(--kkbk--component--color--text--button--disabled);
    cursor: not-allowed;
  }
`
