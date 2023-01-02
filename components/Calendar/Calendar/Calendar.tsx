/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef } from 'react'

import { useCalendarState } from '@react-stately/calendar'
import { useCalendar } from '@react-aria/calendar'
import { useLocale } from '@react-aria/i18n'
import { createCalendar } from '@internationalized/date'

import { CalendarGrid } from '../CalendarGrid'

import { Button } from '../Button'
import { Icon } from '../../Icon'
import { Header, Month } from '../styles'

const ICON_SIZE = 24

export function Calendar(props: any) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })
  const ref = useRef()
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state, ref)

  return (
    <div {...calendarProps} ref={ref}>
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
    </div>
  )
}
