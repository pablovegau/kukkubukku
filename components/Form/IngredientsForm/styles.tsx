import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const IngredientWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--kkbk--color--text--dim);

  ${typography.text.small}
`

export const Ingredient = styled.p`
  margin-right: var(--kkbk--spacing--16);
`
