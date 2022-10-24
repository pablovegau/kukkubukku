import { Rating } from "../Rating";
import {
  Container,
  CardBottom,
  ImgWrapper,
  RecipeName,
  CARD_SIZES
} from "./styles";

export interface Card {
  image: string;
  name: string;
  navigateTo: string;
  rating: number;
  size?: string;
}

// TODO: Move img to picture https://nextjs.org/docs/messages/no-img-element

function CardVertical({
  image,
  name,
  navigateTo,
  rating,
  size = CARD_SIZES.SMALL
}: Card) {
  return (
    <Container href={navigateTo} size={size}>
      <ImgWrapper size={size}>
        <img src={image} alt={`${name} card`} />
      </ImgWrapper>
      <CardBottom>
        <RecipeName>{name}</RecipeName>
        <Rating value={rating.toString()} />
      </CardBottom>
    </Container>
  );
}

CardVertical.CARD_SIZES = CARD_SIZES;

export default CardVertical;

// Example to use in App.js

/*
  import { CardVertical } from "./components/CardVertical";

  ...

  <CardVertical
    image="https://images.unsplash.com/photo-1499636136210-6f4ee915583e"
    recipeName="Galletas de chocolate con sal"
    navigateTo="https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue"
    ratingValue="4.7"
    size={CardVertical.CARD_SIZES.SMALL}
  />
*/
