import styled from 'styled-components'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { typography } from 'styles/mixins'

export const Container = styled.header`
  position: fixed;
  /* TODO: Check why this is necessary, on hover a card the image appears on top of the header */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding-left: var(--kkbk--spacing--16);
  padding-right: var(--kkbk--spacing--16);
  background-color: var(--kkbk--color--background--app);

  & > a {
    text-align: left;
  }
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Tools = styled.div`
  display: flex;
  align-items: center;

  // TODO: fix this, the Tool will be no a dic with role, but a button
  > a:not(:last-child),
  > div[role='button'] {
    margin-right: var(--kkbk--spacing--24);
  }
`

export const TemporalSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: var(--kkbk--spacing--24);
`

export const NavigationMenu = styled(NavigationMenuPrimitive.Root)`
  display: none;

  @media screen and (min-width: 730px) {
    display: block;
  }
`

export const NavigationMenuList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  list-style: none;
`

export const NavigationMenuItem = styled(NavigationMenuPrimitive.Item)`
  &:not(:last-child) {
    margin-right: var(--kkbk--spacing--24);
  }
`

export const NavigationMenuMyLink = styled.div`
  color: var(--kkbk--base-color--primary--main); // Create token
  ${typography.text.bold.base}

  transition: color 0.15s ease-in-out;

  &:hover {
    color: var(--kkbk--base-color--primary--dark); // Create token
  }
`
