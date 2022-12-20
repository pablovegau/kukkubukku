// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */

export function calendarDateToTimestamp(date: any) {
  const datePlusOffset = date.toDate()
  datePlusOffset.setDate(datePlusOffset.getDate() + 1)

  return datePlusOffset.toISOString()
}
