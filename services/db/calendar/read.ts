import { getCalendarIdDatabase, getCalendarEventsDatabase } from 'provider/db/calendar/read'

export async function getCalendarId(userId: string) {
  return await getCalendarIdDatabase(userId)
}

export async function getCalendarEvents(calendarId: string, scheduleAt: Date) {
  return await getCalendarEventsDatabase(calendarId, scheduleAt)
}
