// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { AppLayout } from 'components/AppLayout'
import { Container } from 'styles/pages/create/recipe'
import { MainTitle } from 'components/MainTitle'
import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../../../../provider/db/constants'
import { getCalendarId } from 'services/db/calendar/read'
import { useAuth } from 'services/auth'
import { useRouter } from 'next/router'
import { parseDate } from '@internationalized/date'
import { calendarDateToTimestamp } from 'utils/dates'
import styled from 'styled-components'
import { typography } from 'styles/mixins'

const SearchPlanification: NextPage = () => {
  const auth = useAuth()
  const [planifications, setPlanifications] = useState()

  const router = useRouter()
  const { selectedDate, diners } = router.query

  useEffect(() => {
    supabase.from(TABLE_NAMES.PLANNING).select().then(setPlanifications)
  }, [auth?.user?.id])

  async function handleClick(planification) {
    // TODO: move to services
    const startDate = parseDate(selectedDate)

    // Conseguir el calendarId
    const { data: calendarId } = await getCalendarId(auth?.user?.id)

    // Conseguir los Planning events de la planificación seleccionada ordenados por dayPosition
    const { data: planningEvents } = await supabase
      .from(TABLE_NAMES.PLANNING_EVENT)
      .select()
      .eq('planningId', planification.id)
    // .order('dayPosition', { ascending: true })

    // Hacer un map y guardar en formato calendarEvent, para ello sumar a la fecha parseada el dayPosition => selectedDateParsed.add({ days: 1 }) y convertirla en timestamp => calendarDateToTimestamp()
    const calendarEvents = planningEvents.map((planningEvent) => {
      const calendarDate = startDate.add({ days: planningEvent.dayPosition })
      const calendarDateTimestamp = calendarDateToTimestamp(calendarDate)

      return {
        recipeId: planningEvent.recipeId,
        calendarId: calendarId.id,
        meal: planningEvent.meal,
        diners,
        scheduleAt: calendarDateTimestamp,
      }
    })

    await supabase.from(TABLE_NAMES.CALENDAR_EVENT).insert(calendarEvents)

    router.push('/calendar')
  }

  return (
    <AppLayout title=" - Buscar planificación">
      <Container>
        <MainTitle>Seleccionar planificación</MainTitle>
        <List>
          {planifications?.data?.map((planification) => (
            <ListItem key={planification.id} role="button" onClick={() => handleClick(planification)}>
              <ListItemHeader>{planification.name}</ListItemHeader>
              <ListItemBody>{planification.description}</ListItemBody>
            </ListItem>
          ))}
        </List>
      </Container>
    </AppLayout>
  )
}

export default SearchPlanification

const List = styled.div`
  margin-top: var(--kkbk--spacing--24);

  & div:not(:last-child) {
    margin-bottom: var(--kkbk--spacing--24);
  }
`

const ListItem = styled.div`
  padding: var(--kkbk--spacing--16);
  border-radius: var(--kkbk--spacing--4);
  background-color: var(--kkbk--base-color--secondary--alpha--20);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--kkbk--base-color--secondary--alpha--50);
  }
`

const ListItemHeader = styled.h3`
  margin-bottom: var(--kkbk--spacing--12);

  ${typography.text.bold.base}
`

const ListItemBody = styled.div`
  ${typography.text.small}
`
