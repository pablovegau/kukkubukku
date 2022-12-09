import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--kkbk--spacing--32);
  margin-right: var(--kkbk--spacing--32);
  /* align-items: center; */
`

export const CalendarComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: var(--kkbk--spacing--32);
`

export const MenuOfTheDay = styled.div``

export const MealTitle = styled.h2`
  margin-bottom: var(--kkbk--spacing--16);
  ${typography.text.bold.medium}
`

export const CardsWrapper = styled.div`
  margin-bottom: var(--kkbk--spacing--8);
`
