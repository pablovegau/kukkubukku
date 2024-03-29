// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
// TODO: Chech the new Image component from next.js 13

import Link from 'next/link'
import { MyLink } from 'components/MyLink'

import { Rating } from '../Rating'

import { Container, CardBottom, ImgWrapper, RecipeName, CARD_SIZES } from './styles'

export interface Card {
  image: string
  name: string
  rating: number
  navigateTo?: string
  onClick?: () => void
  recipeId?: string
  size?: string
}

function CardVertical({ image, name, rating, navigateTo, onClick, recipeId, size = CARD_SIZES.SMALL }: Card) {
  const handleOnClick = () => {
    onClick(recipeId)
  }

  const content = (
    <Container size={size} onClick={onClick && handleOnClick}>
      <ImgWrapper size={size}>
        <img src={image} alt={`${name} card`} />
      </ImgWrapper>
      <CardBottom>
        <RecipeName>{name}</RecipeName>
        <Rating value={rating.toString()} />
      </CardBottom>
    </Container>
  )

  if (navigateTo) {
    return (
      <Link href={navigateTo} passHref legacyBehavior>
        <MyLink>{content}</MyLink>
      </Link>
    )
  }

  return content
}

CardVertical.CARD_SIZES = CARD_SIZES

export default CardVertical
