import styled from 'styled-components'

export const Layout = styled.section`
  height: 100%;
  width: 100%;
  background: var(--kkbk--color--background--app);
  overflow-x: hidden;
`

export const Main = styled.main`
  /* flex: 1; */
  padding-bottom: var(--genericSizes-footer);
  padding-top: calc(72px + 24px);
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: var(--kkbk--color--text--dim);
`
