import {
  getCalendarIdDatabase,
  getCalendarEventsDatabase,
  getCalendarEventsBetweenDatesDatabase,
} from 'provider/db/calendar/read'

export async function getCalendarId(userId: string) {
  return await getCalendarIdDatabase(userId)
}

export async function getCalendarEventsBetweenDates(calendarId: string, start: Date, end: Date) {
  return await getCalendarEventsBetweenDatesDatabase(calendarId, start, end)
}

export async function getCalendarEvents(calendarId: string, scheduleAt: Date) {
  return await getCalendarEventsDatabase(calendarId, scheduleAt)
}
