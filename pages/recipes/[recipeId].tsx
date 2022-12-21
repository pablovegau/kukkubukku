// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { AppLayout } from 'components/AppLayout'
import { Icon } from 'components/Icon'
import { MainTitle } from 'components/MainTitle'
import { Rating } from 'components/Rating'
import { GetStaticProps } from 'next'
import { storageBaseUrl } from 'provider/storage/constants'
import { getAllRecipes, getRecipe } from 'services/db/recipes/read'

import {
  Container,
  CookingTime,
  Description,
  Difficulty,
  Diners,
  ImageWrapper,
  InfoBar,
  Ingredient,
  IngredientAmount,
  IngredientMeasurement,
  IngredientMoreInfo,
  IngredientName,
  Ingredients,
  IngredientsSection,
  LeftWrapper,
  SectionTitle,
  Step,
  StepInstruction,
  StepTitle,
  Steps,
  StepsSection,
  TagsSection,
} from 'styles/pages/recipes'

export async function getStaticProps(context: GetStaticProps) {
  const { recipeId } = context.params
  const recipe = await getRecipe(recipeId)

  return {
    props: {
      initialRecipe: recipe,
    },
  }
}

export async function getStaticPaths() {
  const recipes = await getAllRecipes()
  const paths = recipes.data?.map((recipe) => ({
    params: { recipeId: recipe.id },
  }))

  return {
    paths,
    fallback: false,
  }
}

interface DifficultyDiccionary {
  [key: string]: string
}

const difficultyDiccionary: DifficultyDiccionary = {
  easy: 'fácil',
  normal: 'normal',
  hard: 'difícil',
}

function getDuration(rawDuration: number) {
  const hours = Math.floor(rawDuration / 60)
  const minutes = rawDuration % 60

  const hoursString = hours > 0 ? `${hours}h ` : ''
  const minutesString = minutes > 0 ? `${minutes}m` : ''

  return `${hoursString}${minutesString}`
}

interface IngredientType {
  amount: number | null
  id: string
  measurement: string | null
  name: string
  moreInfo: string | null
}

interface StepType {
  id: string
  instruction: string
  position: number
}

interface RecipeType {
  created_at: string
  description: string
  difficulty: string
  diners: number
  duration: number
  id: string
  image: string
  ingredients: IngredientType[]
  isPublic: boolean
  language: string
  name: string
  rating: number
  steps: StepType[]
  tags: string[]
  tagsIds: string[]
  user_id: string
}

interface RecipeProps {
  initialRecipe: RecipeType
}

export default function Recipe({ initialRecipe }: RecipeProps) {
  const { name, id, duration, diners, rating, difficulty, description, ingredients, steps, tags } = initialRecipe

  return (
    <AppLayout title={` - ${name}`} loginRequired={false}>
      <Container>
        <ImageWrapper>
          <img src={`${storageBaseUrl}recipes/${id}/${id}_0.jpg`} />
        </ImageWrapper>
        <MainTitle>{name}</MainTitle>

        <InfoBar>
          <LeftWrapper>
            <CookingTime>
              <Icon type={Icon.TYPE.CLOCK} size={24} fillColor="--kkbk--color--text--dim" />
              <p>{getDuration(duration)}</p>
            </CookingTime>

            <Diners>
              <Icon type={Icon.TYPE.PERSON} size={24} fillColor="--kkbk--color--text--dim" />
              <p>{diners}</p>
            </Diners>
          </LeftWrapper>

          <Difficulty>
            Dificultad
            <span>{difficultyDiccionary[difficulty]}</span>
          </Difficulty>

          <Rating value={rating} size={Rating.SIZES.MEDIUM} />
        </InfoBar>

        {description && (
          <Description>
            <SectionTitle>Description</SectionTitle>
            {description}
          </Description>
        )}

        <IngredientsSection>
          <SectionTitle>Ingredientes</SectionTitle>
          <Ingredients>
            {ingredients.map((item) => (
              <Ingredient key={item.id}>
                <IngredientName>{item.name}</IngredientName>
                {item.amount && <IngredientAmount> - {item.amount} </IngredientAmount>}
                {item.measurement && <IngredientMeasurement>{item.measurement}</IngredientMeasurement>}
                {item.moreInfo && <IngredientMoreInfo> ({item.moreInfo})</IngredientMoreInfo>}
              </Ingredient>
            ))}
          </Ingredients>
        </IngredientsSection>

        <StepsSection>
          <SectionTitle>Instrucciones</SectionTitle>
          <Steps>
            {steps.map((item) => (
              <Step key={item.id}>
                <StepTitle>Paso {item.position}</StepTitle>
                <StepInstruction>{item.instruction}</StepInstruction>
              </Step>
            ))}
          </Steps>
        </StepsSection>

        <TagsSection>
          <SectionTitle>Tags</SectionTitle>
          <p>{tags.join(', ')}</p>
        </TagsSection>
      </Container>
    </AppLayout>
  )
}
