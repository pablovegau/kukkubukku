import styled from 'styled-components'
import { getThemeTransition } from 'styles/utils'
import { breakpoints } from 'styles/constants'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`

export const Layout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-radius: 0;
  background: var(--kkbk--color--background--app);
  box-shadow: var(--shadow-mobileOnly);
  overflow-x: hidden;
  transition: ${getThemeTransition({ properties: 'background-color' })};
  @media (min-width: ${breakpoints.mobile}) {
    height: 90vh;
    width: ${breakpoints.mobile};
    border-radius: 8px;
  }
`

export const Main = styled.main`
  flex: 1;
  padding-bottom: var(--genericSizes-footer);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  background-color: var(--kkbk--color--text--dim);
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: var(--kkbk--color--text--dim);
`
