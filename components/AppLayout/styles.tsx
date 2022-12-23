import styled from 'styled-components'

export const Layout = styled.section`
  height: 100%;
  width: 100%;
  background: var(--kkbk--color--background--app);
  /* overflow-y: scroll; */
`

interface MainProps {
  showHeader: boolean
  showFooter: boolean
}

export const Main = styled.main<MainProps>`
  /* flex: 1; */
  padding-bottom: ${({ showFooter }) =>
    showFooter ? 'calc(var(--kkbk--height--footer) + var(--kkbk--spacing--32))' : '0'};
  padding-top: ${({ showHeader }) =>
    showHeader ? 'calc(var(--kkbk--height--header) + var(--kkbk--spacing--24))' : '0'};
`
