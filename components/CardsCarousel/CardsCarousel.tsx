import { CardVertical } from "components/CardVertical";

import { Card } from '../CardVertical/CardVertical';
import { Carousel, Container, CardWrapper, SectionHeader } from "./styles";

interface Props {
  cardsData: Card[];
  size: string;
  title: string;
}

function CardsCarousel({ cardsData, size = 'small', title }: Props) {
  return (
    <Container>
      <SectionHeader>{title}</SectionHeader>
      <Carousel>
        {cardsData.map((card) => (
          <CardWrapper key={card.recipeName}>
            <CardVertical
              image={card.image}
              recipeName={card.recipeName}
              navigateTo={card.navigateTo}
              ratingValue={card.ratingValue}
              size={size}
            />
          </CardWrapper>
        ))}
      </Carousel>
    </Container>
  );
}

CardsCarousel.CARD_SIZES = CardVertical.CARD_SIZES;

export default CardsCarousel;

// Example to use in App.js

/*
  import { CardsCarousel } from "components/CardsCarousel";

  ...

  const cardsMockData = [
    {
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      recipeName: "Galletas de chocolate con sal",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 4.7
    },
    {
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      recipeName: "Brownie",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 4.2
    },
    {
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
      recipeName: "Madalenas",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9",
      recipeName: "Pastel de queso con coulis de frutos del bosque",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 3.9
    },
    {
      image: "https://images.unsplash.com/photo-1614174486496-344ef3e9d870",
      recipeName: "Tarta de limon",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 3.5
    },
    {
      image: "https://images.unsplash.com/photo-1622941367239-8acd68fa946d",
      recipeName: "Bizcocho con crema y merengue",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      ratingValue: 4.4
    }
  ];

  ...

  const Container = styled.div`
    width: 100%;
  `;

  ...

  <Container>
    <CardsCarousel
      cardsData={cardsMockData}
      size={CardsCarousel.CARD_SIZES.SMALL}
      title="Postres"
    />
  </Container>
*/
