import { Icon } from 'components/Icon';
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main, Layout } from './styles'

export function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Layout>
        <Header>
          <Icon
            type={Icon.TYPE.PLUS}
            size={24}
            fillColor='--kkbk--color--text--primary'
          />
          <Icon
            type={Icon.TYPE.MAGNIFIER}
            size={24}
            fillColor='--kkbk--color--text--primary'
          />
        </Header>
        <Main>{children}</Main>
        <Footer />
      </Layout>
    </>
  )
}
