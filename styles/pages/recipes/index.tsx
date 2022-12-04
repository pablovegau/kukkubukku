import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
  color: var(--kkbk--color--text--primary);
`

export const ImageWrapper = styled.section`
  margin-bottom: var(--kkbk--spacing--24);

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: var(--kkbk--spacing--4);
  }
`

export const InfoBar = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: var(--kkbk--spacing--16);
  margin-bottom: var(--kkbk--spacing--24);
`

export const LeftWrapper = styled.div`
  display: flex;
`

export const CookingTime = styled.div`
  display: flex;
  align-items: center;
  color: var(--kkbk--color--text--dim);

  ${typography.text.bold.medium}

  p {
    margin-left: var(--kkbk--spacing--8);
  }
`

export const Difficulty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--kkbk--color--text--dim);

  ${typography.text.small}

  span {
    margin-top: -2px;
    ${typography.text.bold.base}
  }
`

export const Diners = styled(CookingTime)`
  margin-left: var(--kkbk--spacing--16);
`

export const Description = styled.div``

export const SectionTitle = styled.h2`
  margin-bottom: var(--kkbk--spacing--16);
  color: var(--kkbk--color--text--primary);
  ${typography.text.bold.medium}
`

export const IngredientsSection = styled.section`
  margin-bottom: var(--kkbk--spacing--24);
`

export const Ingredients = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const Ingredient = styled.li`
  &:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--8);
  }
`

export const IngredientName = styled.span`
  font-weight: 400;
`

export const IngredientAmount = styled.span`
  font-weight: 300;
`

export const IngredientMeasurement = styled.span`
  font-weight: 300;
`

export const IngredientMoreInfo = styled.span`
  font-weight: 300;
`

export const StepsSection = styled.section`
  margin-bottom: var(--kkbk--spacing--24);
`

export const Steps = styled.ol`
  list-style-type: none;
  padding: 0;
`

export const Step = styled.li`
  &:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--16);
  }
`

export const StepTitle = styled.h3`
  margin-bottom: var(--kkbk--spacing--8);
  ${typography.text.bold.small}
`

export const StepInstruction = styled.p`
  ${typography.text.base}
`

export const TagsSection = styled.section``
