// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { AppLayout } from 'components/AppLayout'

import { Calendar as CalendarComponent } from 'components/Calendar'
import { parseDate } from '@internationalized/date'
import { Tool } from 'components/Header/Tool'
import { Container, MealTitle, CalendarComponentWrapper, CardsWrapper } from 'styles/pages/calendar/styles'
import { useAuth } from 'services/auth'
import { getCalendarEvents, getCalendarId } from 'services/db/calendar/read'
import { CardHorizontal } from 'components/CardHorizontal'
import { storageBaseUrl } from 'provider/storage/constants'

const Calendar: NextPage = () => {
  const [value, setValue] = useState(parseDate('2022-12-05'))
  const [events, setEvents] = useState([])
  const auth = useAuth()

  useEffect(() => {
    // TODO: the id comes directly from getCalendarId
    getCalendarId(auth?.user?.id)
      .then(({ data }) => getCalendarEvents(data.id, value.toString()))
      .then(setEvents)
  }, [auth?.user?.id, value])

  const Tools = () => {
    return (
      <>
        <Tool
          navigateTo={{
            pathname: '/add/calendar/meal',
            query: { date: value.toString() },
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
