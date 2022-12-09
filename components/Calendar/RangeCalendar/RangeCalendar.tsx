// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef } from 'react'
import { useRangeCalendar } from 'react-aria'
import { useLocale } from '@react-aria/i18n'
import { useRangeCalendarState } from 'react-stately'
import { createCalendar } from '@internationalized/date'
import { Button } from '../Button'
import { CalendarGrid } from '../CalendarGrid'
import { Header, Month } from '../styles'
import { Icon } from 'components/Icon'

const ICON_SIZE = 24

function RangeCalendar(props) {
  const { locale } = useLocale()
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const ref = useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useRangeCalendar(props, state, ref)

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <Header>
        <Button {...prevButtonProps}>
          <Icon
            type={Icon.TYPE.LEFT_ARROW}
            size={ICON_SIZE}
            label="Move to previous month"
            fillColor="--kkbk--color--text--dim"
          />
        </Button>
        <Month>{title}</Month>
        <Button {...nextButtonProps}>
          <Icon
            type={Icon.TYPE.RIGHT_ARROW}
            size={ICON_SIZE}
            label="Move to next month"
            fillColor="--kkbk--color--text--dim"
          />
        </Button>
      </Header>
      <CalendarGrid state={state} />
      {/* <div>{state}</div> */}
    </div>
  )
}

export default RangeCalendar
