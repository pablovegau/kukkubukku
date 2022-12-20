import { addCalendarToDatabase, addEventToCalendarDatabase } from 'provider/db/calendar/write'

interface CalendarEvent {
  calendarId: string
  diners: number
  meal: string
  recipeId: string
  scheduleAt: Date
}

export async function insertCalendar(userId: string) {
  return await addCalendarToDatabase(userId)
}

export async function addEventToCalendar(calendarEvent: CalendarEvent) {
  await addEventToCalendarDatabase(calendarEvent)
}
