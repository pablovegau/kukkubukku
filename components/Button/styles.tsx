import { Button } from "ariakit/button";
import styled from "styled-components";
import { rem } from "polished";

const TYPE = {
  primary_accent: `
    background-color: var(--kkbk--component--color--background--button--primary-accent--enabled);
    color: var(--kkbk--component--color--text--button--primary-accent--enabled);

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid var(--kkbk--component--color--background--button--primary-accent--hover);
      outline-offset: 2px;
    }

    &:hover,
    &:focus {
      background-color: var(--kkbk--component--color--background--button--primary-accent--hover);
      color: var(--kkbk--component--color--text--button--primary-accent--hover);
    }
  `,
  primary: `
    background-color: var(--kkbk--component--color--background--button--primary--enabled);
    color: var(--kkbk--component--color--text--button--primary--enabled);

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid var(--kkbk--component--color--background--button--primary--hover);
      outline-offset: 2px;
    }

    &:hover,
    &:focus {
      background-color: var(--kkbk--component--color--background--button--primary--hover);
      color: var(--kkbk--component--color--text--button--primary--hover);
    }
  `,
  secondary: `
    padding-left: ${rem("23px")};
    padding-right: ${rem("23px")};
    background-color: var(--kkbk--component--color--background--button--secondary--enabled);
    color: var(--kkbk--component--color--text--button--secondary--enabled);
    border: 1px solid var(--kkbk--component--color--border--button--secondary--enabled);

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

    &[aria-disabled="true"],
    &[aria-disabled="true"]:hover {
      padding-left: var(--kkbk--spacing--24);
      padding-right: var(--kkbk--spacing--24);
      border: none;
    }
  `,
  terciary: `
    background-color: var(--kkbk--component--color--background--button--terciary--enabled);
    color: var(--kkbk--component--color--text--button--terciary--enabled);

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid var(--kkbk--component--color--background--button--terciary--hover);
      outline-offset: 2px;
    }

    &:hover,
    &:focus {
      background-color: var(--kkbk--component--color--background--button--terciary--hover);
      color: var(--kkbk--component--color--text--button--terciary--hover);
    }
  `,
  destructive: `
    background-color: var(--kkbk--component--color--background--button--destructive--enabled);
    color: var(--kkbk--component--color--text--button--destructive--enabled);

    &:focus-visible,
    &[data-focus-visible] {
      outline: 2px solid var(--kkbk--component--color--background--button--destructive--hover);
      outline-offset: 2px;
    }

    &:hover,
    &:focus {
      background-color: var(--kkbk--component--color--background--button--destructive--hover);
      color: var(--kkbk--component--color--text--button--destructive--hover);
    }
  `
};

export const Container = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem("38px")};
  padding-left: var(--kkbk--spacing--24);
  padding-right: var(--kkbk--spacing--24);
  border: none;
  border-radius: ${rem("4px")};
  font-size: 1rem;
  transition: background-color 300ms, color 300ms, border-color 300ms;

  ${(props) => TYPE[props.type]}

  &[aria-disabled="true"],
  &[aria-disabled="true"]:hover {
    background-color: var(
      --kkbk--component--color--background--button--disabled
    );
    color: var(--kkbk--component--color--text--button--disabled);
    cursor: not-allowed;
  }
`;
