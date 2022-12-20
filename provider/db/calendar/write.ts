import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../constants'

interface CalendarEvent {
  recipeId: string
  calendarId: string
  meal: string
  diners: number
  scheduleAt: Date
}

export async function addEventToCalendarDatabase(calendarEvent: CalendarEvent) {
  const { data } = await supabase.from(TABLE_NAMES.CALENDAR_EVENT).insert(calendarEvent).select()

  return data
}
