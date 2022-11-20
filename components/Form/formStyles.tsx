import styled, { css } from 'styled-components'
import { typography } from 'styles/mixins'

export const InputBaseStyles = css`
  border: 2px solid var(--kkbk--component--color--background--input);
  border-radius: var(--kkbk--spacing--4);
  background-color: var(--kkbk--component--color--background--input);
  color: var(--kkbk--color--text--primary);

  ${typography.text.small}

  &::placeholder {
    color: var(--kkbk--color--text--dim);
  }

  &:hover,
  &:focus {
    border: 2px solid var(--kkbk--color--text--dim);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--kkbk--spacing--24);
`

export const InputWrapperGroup = styled.div`
  margin-bottom: var(--kkbk--spacing--24);
  margin-left: calc(var(--kkbk--spacing--32) * -1);
  margin-right: calc(var(--kkbk--spacing--32) * -1);
  padding: var(--kkbk--spacing--32);
  background-color: var(--kkbk--base-color--gray--2);

  button {
    margin-right: 0;
    margin-left: auto;
  }
`

export const IngredientsWrapper = styled.div`
  margin-bottom: var(--kkbk--spacing--16);
  margin-top: var(--kkbk--spacing--8);

  & > div:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--8);
  }
`
