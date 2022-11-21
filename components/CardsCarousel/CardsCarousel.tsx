import { CardVertical } from 'components/CardVertical'

import { Card } from '../CardVertical/CardVertical'
import { Carousel, CardWrapper, SectionHeader } from './styles'

interface Props {
  cardsData: Card[];
  size: string;
  title: string;
}

function CardsCarousel ({ cardsData, size = 'small', title }: Props) {
  return (
    <>
      <SectionHeader>{title}</SectionHeader>
      <Carousel>
        {cardsData.map((card) => (
          <CardWrapper key={card.name}>
            <CardVertical
              image={card.image}
              name={card.name}
              navigateTo={card.navigateTo}
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

// Example to use in App.js

/*
  import { CardsCarousel } from "components/CardsCarousel";

  ...

  const cardsMockData = [
    {
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      name: "Galletas de chocolate con sal",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 4.7
    },
    {
      image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87",
      name: "Brownie",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 4.2
    },
    {
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
      name: "Madalenas",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1578775887804-699de7086ff9",
      name: "Pastel de queso con coulis de frutos del bosque",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 3.9
    },
    {
      image: "https://images.unsplash.com/photo-1614174486496-344ef3e9d870",
      name: "Tarta de limon",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 3.5
    },
    {
      image: "https://images.unsplash.com/photo-1622941367239-8acd68fa946d",
      name: "Bizcocho con crema y merengue",
      navigateTo:
        "https://github.com/pablovegau/petinder/blob/main/src/components/PetCard.vue",
      rating: 4.4
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
