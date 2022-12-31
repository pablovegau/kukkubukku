// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ThemeSwitch } from 'components/ThemeSwitch'
import Link from 'next/link'
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
import { useAuth } from 'services/auth'
import { storageBaseUrl } from 'provider/storage/constants'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const DUMMY_IMAGE = {
  LOGGED: `${storageBaseUrl}avatar-dummy/dummyAvatar.png`,
  NO_LOGGED: `${storageBaseUrl}avatar-dummy/dummyAvatarNoLogger.png`,
}

function Header({ children }: Props) {
  const auth = useAuth()
  const isUserLoggedIn = auth.user !== null

  const avatarImage = auth.user ? DUMMY_IMAGE.LOGGED : DUMMY_IMAGE.NO_LOGGED
  const avatarAlt = auth ? 'avatar sesión iniciada' : 'avatar sesión no iniciada'

  return (
    <Container>
      <LeftWrapper>
        <Link href="/" passHref legacyBehavior>
          <MyLink>
            <Logo />
          </MyLink>
        </Link>

        {isUserLoggedIn ? (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" passHref legacyBehavior>
                  <MyLink>
                    <NavigationMenuMyLink>Recetas</NavigationMenuMyLink>
                  </MyLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/calendar" passHref legacyBehavior>
                  <MyLink>
                    <NavigationMenuMyLink>Calendarios</NavigationMenuMyLink>
                  </MyLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/shoppingLists" passHref legacyBehavior>
                  <MyLink>
                    <NavigationMenuMyLink>Listas de la compra</NavigationMenuMyLink>
                  </MyLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}
      </LeftWrapper>

      <Tools>
        <TemporalSwitchWrapper>
          <ThemeSwitch />
        </TemporalSwitchWrapper>
        {children}
        <Link href="/login" passHref legacyBehavior>
          <MyLink>
            <Avatar size="small" src={avatarImage} alternativeText={avatarAlt} />
          </MyLink>
        </Link>
      </Tools>
    </Container>
  )
}

export default Header
