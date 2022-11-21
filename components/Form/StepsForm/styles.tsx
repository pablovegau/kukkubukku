import styled from 'styled-components'
import { typography } from 'styles/mixins'
import { IngredientsWrapper } from 'components/Form/formStyles'

export const StepsWrapper = styled(IngredientsWrapper)`
  & > div:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--16);
  }
`

export const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--kkbk--color--text--dim);

  ${typography.text.small}
`

export const StepTitle = styled.h3`
  margin-bottom: var(--kkbk--spacing--8);
  ${typography.text.bold.small}
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Step = styled.p`
  margin-right: var(--kkbk--spacing--16);
`
