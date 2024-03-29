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
import { PagesContainer } from 'styles/pages/sharedStyles'

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
          iconType={Tool.ICON_TYPE.ADD_RECIPE}
        />
        <Tool
          navigateTo={{
            pathname: '/calendar/search/planification',
            query: { selectedDate: value.toString() },
          }}
          iconType={Tool.ICON_TYPE.ADD_CALENDAR}
        />
      </>
    )
  }

  return (
    <AppLayout title=" - Planificación" Tools={Tools}>
      <PagesContainer>
        <Container>
          <CalendarComponentWrapper>
            <CalendarComponent aria-label="Calendar" value={value} onChange={setValue} calendarId={calendarId} />
          </CalendarComponentWrapper>

          {/* Fix this with a map */}
          {events?.breakfast?.length > 0 ? (
            <>
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
            </>
          ) : null}

          {events?.['mid-morning_snack']?.length > 0 ? (
            <>
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
            </>
          ) : null}

          {events?.lunch?.length > 0 ? (
            <>
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
            </>
          ) : null}

          {events?.afternoon_snack?.length > 0 ? (
            <>
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
            </>
          ) : null}

          {events?.dinner?.length > 0 ? (
            <>
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
            </>
          ) : null}
        </Container>
      </PagesContainer>
    </AppLayout>
  )
}

export default Calendar
