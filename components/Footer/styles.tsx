import styled from 'styled-components'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'

export const NavigationMenu = styled(NavigationMenuPrimitive.Root)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--kkbk--color--background--app);

  @media screen and (min-width: 730px) {
    visibility: hidden;
  }
`

export const NavigationMenuList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  height: var(--kkbk--height--footer);
  padding: var(--kkbk--spacing--4);
  list-style: none;
`

export const NavigationMenuItem = styled(NavigationMenuPrimitive.Item)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: var(--kkbk--color--background--app);
`

export const NavigationMenuMyLink = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: var(--kkbk--spacing--4);
  background-color: var(--kkbk--color--background--app);
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: var(--kkbk--base-color--secondary--alpha--20);
  }

  &:focus-visible {
    outline-offset: -1px;
  }
`
