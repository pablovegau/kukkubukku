import styled from 'styled-components'

export const Layout = styled.section`
  position: relative;
  width: 100%;
  background: var(--kkbk--color--background--app);
`

interface MainProps {
  showHeader: boolean
  showFooter: boolean
}

export const Main = styled.main<MainProps>`
  flex: 1;
  padding-bottom: ${({ showFooter }) =>
    showFooter ? 'calc(var(--kkbk--height--footer) + var(--kkbk--spacing--32))' : '0'};
  padding-top: ${({ showHeader }) =>
    showHeader ? 'calc(var(--kkbk--height--header) + var(--kkbk--spacing--24))' : '0'};
`
