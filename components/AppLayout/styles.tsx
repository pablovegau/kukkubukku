import styled from 'styled-components'

export const Layout = styled.section`
  height: 100%;
  width: 100%;
  background: var(--kkbk--color--background--app);
  overflow-x: hidden;
`

export const Main = styled.main`
  /* flex: 1; */
  padding-bottom: calc(var(--kkbk--height--footer) + var(--kkbk--spacing--32));
  padding-top: calc(var(--kkbk--height--header) + var(--kkbk--spacing--24));
`
