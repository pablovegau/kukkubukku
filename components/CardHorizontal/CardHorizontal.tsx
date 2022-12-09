// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
// TODO: Chech the new Image component from next.js 13

import Link from 'next/link'
import { MyLink } from 'components/MyLink'

import { Container, CardBottom, ImgWrapper, RecipeName } from './styles'

export interface Card {
  image: string
  name: string
  navigateTo?: string
  onClick?: () => void
  recipeId?: string
}

function CardHorizontal({ image, name, navigateTo, onClick, recipeId }: Card) {
  const handleOnClick = () => {
    onClick(recipeId)
  }

  const content = (
    <Container onClick={onClick && handleOnClick}>
      <ImgWrapper>
        <img src={image} alt={`${name} card`} />
      </ImgWrapper>
      <CardBottom>
        <RecipeName>{name}</RecipeName>
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

export default CardHorizontal
