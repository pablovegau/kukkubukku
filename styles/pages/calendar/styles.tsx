import styled from 'styled-components'
import { typography } from 'styles/mixins'

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  max-width: 496px;
  margin-left: auto;
  margin-right: auto;
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
  color: var(--kkbk--color--text--primary);
  ${typography.text.bold.medium}
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--kkbk--spacing--8);
`
