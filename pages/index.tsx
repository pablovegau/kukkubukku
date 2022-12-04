// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { NextPage } from 'next'
import styled from 'styled-components'
import { CardsCarousel } from 'components/CardsCarousel'
import { AppLayout } from 'components/AppLayout'
import Link from 'next/link'
import { MyLink } from 'components/MyLink'
import { Icon } from 'components/Icon'
import { useAuth } from 'services/auth'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

const Container = styled.div`
  width: 100%;

  > div:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--24);
  }
`

const Tools = () => {
  const auth = useAuth()

  return (
    <>
      {auth.user && (
        <Link href="/create/recipe" passHref legacyBehavior>
          <MyLink>
            <Icon type={Icon.TYPE.PLUS} size={24} fillColor="--kkbk--color--text--primary" />
          </MyLink>
        </Link>
      )}

      <Link href="/" passHref legacyBehavior>
        <MyLink>
          <Icon type={Icon.TYPE.MAGNIFIER} size={24} fillColor="--kkbk--color--text--primary" />
        </MyLink>
      </Link>
    </>
  )
}

const Home: NextPage = () => {
  const { data: recipes } = useSWR('/api/recipesGroupedByTag', fetcher)

  if (!recipes) {
    return null
  }

  return (
    <AppLayout title=" - Recetas" Tools={Tools}>
      <Container>
        {Object.entries(recipes).map(([tag, recipes]) => (
          <CardsCarousel key={tag} cardsData={recipes} size={CardsCarousel.CARD_SIZES.SMALL} title={tag} />
        ))}
      </Container>
    </AppLayout>
  )
}

export default Home
