/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect, useRef, useState } from 'react'

import { useCalendarState } from '@react-stately/calendar'
import { useCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { createCalendar } from '@internationalized/date'

import { CalendarGrid } from '../CalendarGrid'

import { Button } from '../Button'
import { Icon } from '../../Icon'
import { Header, Month } from '../styles'
import { getCalendarEventsBetweenDates } from 'services/db/calendar/read'

const ICON_SIZE = 24

// TODO: move this to a utils file?
function getDaysWithEvents(events: any) {
  const daysWithEventsRaw = events?.data?.map((event: any) => event.scheduleAt.slice(0, 10))
  const daysWithEventsSet = new Set(daysWithEventsRaw)
  const daysWithEvents = Array.from(daysWithEventsSet)

  return daysWithEvents
}

export function Calendar(props: any) {
  const { calendarId } = props

  const [events, setEvents] = useState()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })
  const ref = useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state, ref)

  function updateRangeDates() {
    setStartDate(state.visibleRange.start)
    setEndDate(state.visibleRange.end)
  }

  async function getMonthEvents() {
    if (!calendarId) return

    return await getCalendarEventsBetweenDates(calendarId, startDate, endDate)
  }

  // TODO: Check why this is rerender constantly, seems a problem with the state
  useEffect(() => {
    getMonthEvents().then((events) => {
      setEvents(getDaysWithEvents(events))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, calendarId])

  useEffect(() => {
    updateRangeDates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div {...calendarProps} ref={ref}>
      <Header>
        <Button {...prevButtonProps} onClick={updateRangeDates}>
          <Icon
            type={Icon.TYPE.LEFT_ARROW}
            size={ICON_SIZE}
            label="Move to previous month"
            fillColor="--kkbk--color--text--dim"
          />
        </Button>
        <Month>{title}</Month>
        <Button {...nextButtonProps} onClick={updateRangeDates}>
          <Icon
            type={Icon.TYPE.RIGHT_ARROW}
            size={ICON_SIZE}
            label="Move to next month"
            fillColor="--kkbk--color--text--dim"
          />
        </Button>
      </Header>
      <CalendarGrid state={state} events={events} />
    </div>
  )
}
