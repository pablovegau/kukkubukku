import { Button } from 'ariakit/button'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { rem } from 'polished'

interface Types {
  [key: string]: FlattenSimpleInterpolation
}

export interface Props {
  buttonType: string
}

const primaryAccent: FlattenSimpleInterpolation = css`
  background-color: var(
    --kkbk--component--color--background--button--primary-accent--enabled
  );
  color: var(--kkbk--component--color--text--button--primary-accent--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      var(--kkbk--component--color--background--button--primary-accent--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(
      --kkbk--component--color--background--button--primary-accent--hover
    );
    color: var(--kkbk--component--color--text--button--primary-accent--hover);
  }
`

const primary: FlattenSimpleInterpolation = css`
  background-color: var(
    --kkbk--component--color--background--button--primary--enabled
  );
  color: var(--kkbk--component--color--text--button--primary--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      var(--kkbk--component--color--background--button--primary--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(
      --kkbk--component--color--background--button--primary--hover
    );
    color: var(--kkbk--component--color--text--button--primary--hover);
  }
`

const secondary: FlattenSimpleInterpolation = css`
  padding-left: ${rem('23px')};
  padding-right: ${rem('23px')};
  background-color: var(
    --kkbk--component--color--background--button--secondary--enabled
  );
  color: var(--kkbk--component--color--text--button--secondary--enabled);
  border: 1px solid
    var(--kkbk--component--color--border--button--secondary--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      var(--kkbk--component--color--border--button--secondary--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(
      --kkbk--component--color--background--button--secondary--hover
    );
    color: var(--kkbk--component--color--text--button--secondary--hover);
    border: 1px solid
      var(--kkbk--component--color--border--button--secondary--hover);
  }

  &[aria-disabled='true'],
  &[aria-disabled='true']:hover {
    padding-left: var(--kkbk--spacing--24);
    padding-right: var(--kkbk--spacing--24);
    border: none;
  }
`

const terciary: FlattenSimpleInterpolation = css`
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

const destructive: FlattenSimpleInterpolation = css`
  background-color: var(
    --kkbk--component--color--background--button--destructive--enabled
  );
  color: var(--kkbk--component--color--text--button--destructive--enabled);

  &:focus-visible,
  &[data-focus-visible] {
    outline: 2px solid
      var(--kkbk--component--color--background--button--destructive--hover);
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: var(
      --kkbk--component--color--background--button--destructive--hover
    );
    color: var(--kkbk--component--color--text--button--destructive--hover);
  }
`

const TYPE: Types = {
  primary_accent: primaryAccent,
  primary,
  secondary,
  terciary,
  destructive,
}

export const buttonStyles = css<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem('38px')};
  width: fit-content;
  padding-left: var(--kkbk--spacing--24);
  padding-right: var(--kkbk--spacing--24);
  border: none;
  border-radius: var(--kkbk--spacing--4);
  font-size: 1rem;
  transition: background-color 300ms, color 300ms, border-color 300ms;

  ${({ buttonType }) => TYPE[buttonType]}

  &[aria-disabled="true"],
  &[aria-disabled="true"]:hover {
    background-color: var(
      --kkbk--component--color--background--button--disabled
    );
    color: var(--kkbk--component--color--text--button--disabled);
    cursor: not-allowed;
  }
`

export const Container = styled(Button)<Props>`
  ${buttonStyles}
`
