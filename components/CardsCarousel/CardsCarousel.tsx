// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CardVertical } from 'components/CardVertical'
import { storageBaseUrl } from 'services/storage/constants'

import { Carousel, CardWrapper, Container, SectionHeader, ButtonLeft, ButtonRight } from './styles'
import { useEffect, useRef, useState } from 'react'
import { Icon } from 'components/Icon'

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

const marginOffset = 24

function CardsCarousel({ cardsData, size = 'small', title }: Props) {
  const [show, setShow] = useState(true)
  const ref = useRef()

  if (!title) {
    title = 'Recetas sin tags'
  }

  // TODO: Add a event listener to resize the window
  useEffect(() => {
    setShow(window.innerWidth < cardsData.length * 172 + marginOffset)
  }, [cardsData])

  function getCurrentSliderWidth() {
    return ref?.current?.offsetWidth - marginOffset
  }

  function onHandleMoveCardsToTheLeft(e) {
    e.stopPropagation()
    ref.current.scrollLeft = ref.current.scrollLeft - getCurrentSliderWidth()
  }

  function onHandleMoveCardsToTheRight(e) {
    e.stopPropagation()
    ref.current.scrollLeft = ref.current.scrollLeft + getCurrentSliderWidth()
  }

  return (
    <Container>
      <SectionHeader>{title}</SectionHeader>

      {show && (
        <ButtonLeft onClick={onHandleMoveCardsToTheLeft}>
          <Icon
            type={Icon.TYPE.LEFT_ARROW}
            size={16}
            label="Move to previous month"
            fillColor="--kkbk--color--emphasis--primary"
          />
        </ButtonLeft>
      )}
      <Carousel ref={ref}>
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
      {show && (
        <ButtonRight onClick={onHandleMoveCardsToTheRight}>
          <Icon
            type={Icon.TYPE.RIGHT_ARROW}
            size={16}
            label="Move to previous month"
            fillColor="--kkbk--color--emphasis--primary"
          />
        </ButtonRight>
      )}
    </Container>
  )
}

CardsCarousel.CARD_SIZES = CardVertical.CARD_SIZES

export default CardsCarousel
