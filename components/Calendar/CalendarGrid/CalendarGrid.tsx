/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useCalendarGrid } from '@react-aria/calendar'
import { getWeeksInMonth } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { CalendarCell } from '../CalendarCell'
import { calendarDateToTimestamp } from 'utils/dates'

import { HeadCell } from '../styles'

export function CalendarGrid({ state, ...props }: any) {
  const { events } = props
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>
              <HeadCell>{day}</HeadCell>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date, i) => {
              const timeStampDate = calendarDateToTimestamp(date).slice(0, 10)
              const hasEvent = events?.includes(timeStampDate)

              return date ? <CalendarCell key={i} state={state} date={date} hasEvent={hasEvent} /> : <td key={i} />
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
