import type { NextPage } from 'next'
import styled from 'styled-components'
import { CardsCarousel } from 'components/CardsCarousel'
import { AppLayout } from 'components/AppLayout'

const cardsMockData = [
  {
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
    name: 'Galletas de chocolate con sal',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 4.7
  },
  {
    image: 'https://images.unsplash.com/photo-1636743715220-d8f8dd900b87',
    name: 'Brownie',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 4.2
  },
  {
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e',
    name: 'Madalenas',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 4.9
  },
  {
    image: 'https://images.unsplash.com/photo-1578775887804-699de7086ff9',
    name: 'Pastel de queso con coulis de frutos del bosque',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 3.9
  },
  {
    image: 'https://images.unsplash.com/photo-1614174486496-344ef3e9d870',
    name: 'Tarta de limon',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 3.5
  },
  {
    image: 'https://images.unsplash.com/photo-1622941367239-8acd68fa946d',
    name: 'Bizcocho con crema y merengue',
    navigateTo:
      'https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue',
    rating: 4.4
  }
]

const Container = styled.div`
  width: 100%;

  > div:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--24);
  }
`

const Home: NextPage = () => {
  return (
    <AppLayout title=" - Recetas">
      <Container>
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
        <CardsCarousel
          cardsData={cardsMockData}
          size={CardsCarousel.CARD_SIZES.SMALL}
          title="Postres"
        />
      </Container>
    </AppLayout>
  )
}

export default Home
