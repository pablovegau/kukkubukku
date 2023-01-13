/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ThemeSwitch } from 'components/ThemeSwitch'
import { Logo } from '../Logo'

import {
  Container,
  Tools,
  TemporalSwitchWrapper,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuMyLink,
  LeftWrapper,
} from './styles'
import { MyLink } from 'components/MyLink'
import { Avatar } from 'components/Avatar'
import { storageBaseUrl } from 'provider/storage/constants'

interface Props {
  auth?: any
  children: JSX.Element | JSX.Element[]
}

export const DUMMY_IMAGE = {
  LOGGED: `${storageBaseUrl}avatar-dummy/dummyAvatar.png`,
  NO_LOGGED: `${storageBaseUrl}avatar-dummy/dummyAvatarNoLogger.png`,
}

function Header({ children, auth }: Props) {
  const isUserLoggedIn = auth?.user !== null

  const avatarImage = auth?.user ? DUMMY_IMAGE.LOGGED : DUMMY_IMAGE.NO_LOGGED
  const avatarAlt = auth?.user ? 'avatar sesión iniciada' : 'avatar sesión no iniciada'

  return (
    <Container>
      <LeftWrapper>
        <MyLink href="/">
          <Logo />
        </MyLink>

        {isUserLoggedIn ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <MyLink href="/">
                  <NavigationMenuMyLink>Recetas</NavigationMenuMyLink>
                </MyLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <MyLink href="/calendar">
                  <NavigationMenuMyLink>Calendarios</NavigationMenuMyLink>
                </MyLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <MyLink href="/shoppingLists">
                  <NavigationMenuMyLink>Listas de la compra</NavigationMenuMyLink>
                </MyLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}
      </LeftWrapper>

      <Tools>
        <TemporalSwitchWrapper>
          <ThemeSwitch />
        </TemporalSwitchWrapper>
        {isUserLoggedIn ? children : null}
        <MyLink href="/login" label="go to log in">
          <Avatar size="small" src={avatarImage} alternativeText={avatarAlt} />
        </MyLink>
      </Tools>
    </Container>
  )
}

export default Header
