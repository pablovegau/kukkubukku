// import { Nav, Header } from 'components'

import { Main, Layout, Container, Header, Footer } from './styles'

export function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Container>
        <Layout>
          <Header>Header</Header>
          <Main>{children}</Main>
          <Footer>Footer</Footer>
        </Layout>
      </Container>
    </>
  )
}
