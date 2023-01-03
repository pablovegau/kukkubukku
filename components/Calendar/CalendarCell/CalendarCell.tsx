/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef } from 'react'
import { useCalendarCell } from '@react-aria/calendar'

import { BodyCell } from '../styles'

interface Props {
  state: any
  date: any
  hasEvent?: boolean
}

export function CalendarCell({ state, date, hasEvent }: Props) {
  const ref = useRef()
  const { cellProps, buttonProps, isSelected, isOutsideVisibleRange, isDisabled, isUnavailable, formattedDate } =
    useCalendarCell({ date }, state, ref)

  return (
    <td {...cellProps}>
      <BodyCell
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        isSelected={isSelected}
        isDisabled={isDisabled}
        isUnavailable={isUnavailable}
        hasEvent={hasEvent}
      >
        {formattedDate}
      </BodyCell>
    </td>
  )
}
