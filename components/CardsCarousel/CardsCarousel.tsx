import { CardVertical } from 'components/CardVertical'
import { storageBaseUrl } from 'services/storage/constants'

import { Carousel, CardWrapper, SectionHeader } from './styles'

interface Card {
  created_at: string
  description: string
  difficulty: string
  diners: number
  duration: number
  id: string
  isPublic: boolean
  language: string
  name: string
  rating: number
  tagsIds: string[]
  user_id: string
}

interface Props {
  cardsData: Card[]
  size: string
  title: string
}

function CardsCarousel({ cardsData, size = 'small', title }: Props) {
  return (
    <>
      <SectionHeader>{title}</SectionHeader>
      <Carousel>
        {cardsData.map((card) => (
          <CardWrapper key={card.name}>
            <CardVertical
              image={`${storageBaseUrl}recipes/${card.id}/${card.id}_0.jpg`}
              name={card.name}
              navigateTo={`/recipes/${card.id}`}
              rating={card.rating}
              size={size}
            />
          </CardWrapper>
        ))}
      </Carousel>
    </>
  )
}

CardsCarousel.CARD_SIZES = CardVertical.CARD_SIZES

export default CardsCarousel
