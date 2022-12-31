// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { NextPage } from 'next'
import { AppLayout } from 'components/AppLayout'
import { MainTitle } from 'components/MainTitle'
import { RecipesWrapper } from 'styles/pages/add/calendar/meal/search/styles'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'
import { CardVertical } from 'components/CardVertical'
import { storageBaseUrl } from 'provider/storage/constants'
import { addEventToCalendar } from 'services/db/calendar/write'
import { useAuth } from 'services/auth'
import { getCalendarId } from 'services/db/calendar/read'
import { useEffect, useState } from 'react'
import { parseDate } from '@internationalized/date'
import { calendarDateToTimestamp } from 'utils/dates'
import { PagesContainer } from 'styles/pages/sharedStyles'

const CalendarSearch: NextPage = () => {
  const [calendarId, setCalendarId] = useState<string>(null)
  const auth = useAuth()
  const { data: recipes } = useSWR('/api/allRecipes', fetcher)

  useEffect(() => {
    // TODO: the id comes directly from getCalendarId
    getCalendarId(auth?.user?.id).then(({ data }) => setCalendarId(data.id))
  }, [auth?.user?.id])

  const router = useRouter()
  const { selectedDate, meal, diners } = router.query

  const handleOnClick = (id) => {
    const timestamp = calendarDateToTimestamp(parseDate(selectedDate))

    addEventToCalendar({
      calendarId,
      recipeId: id,
      diners,
      meal,
      scheduleAt: timestamp,
    })

    router.push({
      pathname: '/calendar',
    })
  }

  return (
    <AppLayout title=" - Buscar receta">
      <PagesContainer>
        <MainTitle>Seleccionar receta</MainTitle>
        <RecipesWrapper>
          {recipes?.map((recipe) => (
            <CardVertical
              key={recipe.id}
              image={`${storageBaseUrl}recipes/${recipe.id}/${recipe.id}_0.jpg`}
              name={recipe.name}
              onClick={handleOnClick}
              rating={recipe.rating}
              recipeId={recipe.id}
            />
          ))}
        </RecipesWrapper>
      </PagesContainer>
    </AppLayout>
  )
}

export default CalendarSearch
