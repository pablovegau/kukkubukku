import { addEventToCalendarDatabase } from 'provider/db/calendar/write'

interface CalendarEvent {
  calendarId: string
  diners: number
  meal: string
  recipeId: string
  scheduleAt: Date
}

export function addEventToCalendar(calendarEvent: CalendarEvent) {
  addEventToCalendarDatabase(calendarEvent)
}
