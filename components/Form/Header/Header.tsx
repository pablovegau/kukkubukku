// @ts-nocheck

import { Avatar, AvatarImage } from 'components/Avatar';
import { ThemeSwitch } from 'components/ThemeSwitch';
import Link from 'next/link';
import { Logo } from '../../Logo'

import { Container, Tools, TemporalSwitchWrapper } from "./styles";
import { MyLink } from 'components/MyLink';

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Header({ children }: Props) {
  return (
    <Container>
      <Link href="/" passHref legacyBehavior>
        <MyLink>
          <Logo />
        </MyLink>
      </Link>
      <Tools>
        <TemporalSwitchWrapper>
          <ThemeSwitch />
        </TemporalSwitchWrapper>
        {children}
        <Avatar size="small">
          <AvatarImage
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
        </Avatar>
      </Tools>
    </Container>
  );
}

export default Header;
