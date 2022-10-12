import { Main, Layout, Header, Footer } from './styles'

export function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Main>{children}</Main>
        <Footer>Footer</Footer>
      </Layout>
    </>
  )
}
