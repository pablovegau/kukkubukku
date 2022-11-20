import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const InputFile = styled.input`
  height: 40px;
  border: 2px solid transparent;
  border-radius: var(--kkbk--spacing--4);
  font-family: var(--kkbk--font--base);

  ${typography.text.small}

  &::file-selector-button {
    height: 100%;
    margin-right: var(--kkbk--spacing--16);
    padding-left: var(--kkbk--spacing--24);
    padding-right: var(--kkbk--spacing--24);
    background-color: var(--kkbk--component--color--background--button--secondary--enabled);
    color: var(--kkbk--component--color--text--button--secondary--enabled);
    border: 1px solid var(--kkbk--component--color--border--button--secondary--enabled);
    border-radius: var(--kkbk--spacing--4);
    transition: background-color 300ms, color 300ms, border-color 300ms;

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid var(--kkbk--component--color--border--button--secondary--hover);
      outline-offset: 2px;
    }

    &:hover,
    &:focus {
      background-color: var(--kkbk--component--color--background--button--secondary--hover);
      color: var(--kkbk--component--color--text--button--secondary--hover);
      border: 1px solid var(--kkbk--component--color--border--button--secondary--hover);
    }
  }
`

// TODO: Review why isn't working in Firefox
export const ImageWrapper = styled.div`
  margin-top: var(--kkbk--spacing--16);

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: var(--kkbk--spacing--4);
  }
`
