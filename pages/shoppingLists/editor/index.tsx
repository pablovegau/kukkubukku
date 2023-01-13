// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useState, useEffect } from 'react'
import { AppLayout } from 'components/AppLayout'
import { RangeCalendar } from 'components/Calendar/RangeCalendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import { getShoppingListIngredientsPreview } from 'services/db/shoppingList/read'
import { calendarDateToTimestamp } from 'utils/dates'
import {
  IngredientsSection,
  SectionTitle,
  Ingredients,
  Ingredient,
  IngredientName,
  IngredientAmount,
  IngredientMeasurement,
  IngredientMoreInfo,
} from 'styles/pages/recipes'
import { Container, RangeCalendarWrapper } from 'styles/pages/shoppingLists/editor/styles'
import { Tool } from 'components/Header/Tool'
import { useAuth } from 'services/auth'
import { useRouter } from 'next/router'
import { createShoppingListDatabase } from 'provider/db/shoppingList/write'
import { PagesContainer } from 'styles/pages/sharedStyles'
import { getCalendarId } from 'services/db/calendar/read'

export default function ShoppingListsEditor() {
  const router = useRouter()
  const { user } = useAuth()
  const [value, setValue] = useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()),
  })
  const [ingredients, setIngredients] = useState([])
  const [calendarId, setCalendarId] = useState('')

  useEffect(() => {
    getShoppingListIngredientsPreview(calendarDateToTimestamp(value.start), calendarDateToTimestamp(value.end)).then(
      setIngredients,
    )
  }, [value])

  useEffect(() => {
    if (user) {
      // TODO: the id comes directly from getCalendarId
      getCalendarId(user?.id).then(({ data }) => {
        setCalendarId(data?.id)
      })
    }
  }, [user, value])

  async function onSave() {
    const userId = user?.id
    const shoppingListName = `Lista de la compra - creada el ${today(getLocalTimeZone())}`
    await createShoppingListDatabase(userId, shoppingListName, value)

    router.push('/shoppingLists')
  }

  const Tools = () => {
    return (
      <>
        <Tool onClick={onSave} iconType={Tool.ICON_TYPE.SAVE} />
      </>
    )
  }

  return (
    <AppLayout title=" - Listas de la compra" Tools={Tools}>
      <PagesContainer>
        <Container>
          <SectionTitle>Intervalo de fechas</SectionTitle>
          <RangeCalendarWrapper>
            <RangeCalendar aria-label="Calendar" value={value} onChange={setValue} calendarId={calendarId} />
          </RangeCalendarWrapper>

          <IngredientsSection>
            <SectionTitle>Ingredientes</SectionTitle>
            <Ingredients>
              {ingredients?.map((item) => (
                <Ingredient key={item.id}>
                  <IngredientName>{item.name}</IngredientName>
                  {item.amount && <IngredientAmount> - {item.amount} </IngredientAmount>}
                  {item.measurement && <IngredientMeasurement>{item.measurement}</IngredientMeasurement>}
                  {item.moreInfo && <IngredientMoreInfo> ({item.moreInfo})</IngredientMoreInfo>}
                </Ingredient>
              ))}
            </Ingredients>
          </IngredientsSection>
        </Container>
      </PagesContainer>
    </AppLayout>
  )
}
