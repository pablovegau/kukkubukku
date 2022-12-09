import { useState, useEffect } from 'react'
import { AppLayout } from 'components/AppLayout'
import { RangeCalendar } from 'components/Calendar/RangeCalendar'
import { parseDate } from '@internationalized/date'
import { getShoppingListIngredients } from 'services/db/shoppingList/read'

const formatDateToSaveInState = (date: Date) => date.toISOString().slice(0, 10)
const formatDateToSaveInDatabase = (date: any) => `${date.year}-${date.month}-${date.day}`

export default function ShoppingLists() {
  const [value, setValue] = useState({
    start: parseDate(formatDateToSaveInState(new Date())),
    end: parseDate(formatDateToSaveInState(new Date())),
  })

  useEffect(() => {
    getShoppingListIngredients(formatDateToSaveInDatabase(value.start), formatDateToSaveInDatabase(value.end))
  }, [value])

  return (
    <AppLayout title=" - Listas de la compra">
      <>
        <div>Listas de la compra</div>
        <RangeCalendar aria-label="Calendar" value={value} onChange={setValue} />
      </>
    </AppLayout>
  )
}
