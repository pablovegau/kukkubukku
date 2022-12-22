// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { AppLayout } from 'components/AppLayout'

import { Calendar as CalendarComponent } from 'components/Calendar'
import { today, getLocalTimeZone } from '@internationalized/date'
import { Tool } from 'components/Header/Tool'
import { Container, MealTitle, CalendarComponentWrapper, CardsWrapper } from 'styles/pages/calendar/styles'
import { useAuth } from 'services/auth'
import { getCalendarEvents, getCalendarId } from 'services/db/calendar/read'
import { CardHorizontal } from 'components/CardHorizontal'
import { storageBaseUrl } from 'provider/storage/constants'
import { calendarDateToTimestamp } from 'utils/dates'

const Calendar: NextPage = () => {
  const [value, setValue] = useState(today(getLocalTimeZone()))
  const [events, setEvents] = useState([])
  const [calendarId, setCalendarId] = useState('')
  const auth = useAuth()

  useEffect(() => {
    if (auth?.user) {
      const timestamp = calendarDateToTimestamp(value)
      // TODO: the id comes directly from getCalendarId
      getCalendarId(auth?.user?.id)
        .then(({ data }) => {
          setCalendarId(data?.id)
          return getCalendarEvents(data?.id, timestamp)
        })
        .then(setEvents)
    }
  }, [auth?.user, auth?.user?.id, value])

  const Tools = () => {
    return (
      <>
        <Tool
          navigateTo={{
            pathname: '/calendar/share',
            query: { calendarId },
          }}
          iconType={Tool.ICON_TYPE.SAVE}
        />
        <Tool
          navigateTo={{
            pathname: '/add/calendar/meal',
            query: { selectedDate: value.toString() },
          }}
          iconType={Tool.ICON_TYPE.PLUS}
        />
      </>
    )
  }

  return (
    <AppLayout title=" - Planificación" Tools={Tools}>
      <Container>
        <CalendarComponentWrapper>
          <CalendarComponent aria-label="Calendar" value={value} onChange={setValue} />
        </CalendarComponentWrapper>

        {/* Fix this with a map */}
        <MealTitle>Desayuno</MealTitle>
        <CardsWrapper>
          {events?.breakfast?.map((event) => (
            <CardHorizontal
              key={event.recipe.name}
              image={`${storageBaseUrl}recipes/${event.recipe.id}/${event.recipe.id}_0.jpg`}
              name={event.recipe.name}
              navigateTo={`/recipes/${event.recipe.id}`}
            />
          ))}
        </CardsWrapper>

        <MealTitle>Almuerzo</MealTitle>
        <CardsWrapper>
          {events?.['mid-morning_snack']?.map((event) => (
            <CardHorizontal
              key={event.recipe.name}
              image={`${storageBaseUrl}recipes/${event.recipe.id}/${event.recipe.id}_0.jpg`}
              name={event.recipe.name}
              navigateTo={`/recipes/${event.recipe.id}`}
            />
          ))}
        </CardsWrapper>

        <MealTitle>Comida</MealTitle>
        <CardsWrapper>
          {events?.lunch?.map((event) => (
            <CardHorizontal
              key={event.recipe.name}
              image={`${storageBaseUrl}recipes/${event.recipe.id}/${event.recipe.id}_0.jpg`}
              name={event.recipe.name}
              navigateTo={`/recipes/${event.recipe.id}`}
            />
          ))}
        </CardsWrapper>

        <MealTitle>Merienda</MealTitle>
        <CardsWrapper>
          {events?.afternoon_snack?.map((event) => (
            <CardHorizontal
              key={event.recipe.name}
              image={`${storageBaseUrl}recipes/${event.recipe.id}/${event.recipe.id}_0.jpg`}
              name={event.recipe.name}
              navigateTo={`/recipes/${event.recipe.id}`}
            />
          ))}
        </CardsWrapper>

        <MealTitle>Cena</MealTitle>
        <CardsWrapper>
          {events?.dinner?.map((event) => (
            <CardHorizontal
              key={event.recipe.name}
              image={`${storageBaseUrl}recipes/${event.recipe.id}/${event.recipe.id}_0.jpg`}
              name={event.recipe.name}
              navigateTo={`/recipes/${event.recipe.id}`}
            />
          ))}
        </CardsWrapper>
      </Container>
    </AppLayout>
  )
}

export default Calendar
