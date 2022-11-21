import styled from 'styled-components'

export const Container = styled.div`
  border-radius: var(--kkbk--spacing--4);
  padding: var(--kkbk--spacing--4);
  transition: background-color 300ms, color 300ms;

  background-color: var(
    --kkbk--component--color--background--button--terciary--enabled
  );
  color: var(--kkbk--component--color--text--button--terciary--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      var(--kkbk--component--color--background--button--terciary--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(
      --kkbk--component--color--background--button--terciary--hover
    );
    color: var(--kkbk--component--color--text--button--terciary--hover);
  }
`
