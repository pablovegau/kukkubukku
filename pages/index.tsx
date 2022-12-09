// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { NextPage } from 'next'
import styled from 'styled-components'
import { CardsCarousel } from 'components/CardsCarousel'
import { AppLayout } from 'components/AppLayout'
import { useAuth } from 'services/auth'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'
import { Tool } from 'components/Header/Tool'

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
      {auth.user && <Tool navigateTo="/create/recipe" iconType={Tool.ICON_TYPE.PLUS} />}
      <Tool navigateTo="/" iconType={Tool.ICON_TYPE.MAGNIFIER} />
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
