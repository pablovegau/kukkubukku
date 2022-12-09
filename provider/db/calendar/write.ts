import { supabase } from 'provider/supabaseClient'

interface CalendarEvent {
  recipeId: string
  calendarId: string
  meal: string
  diners: number
  scheduleAt: Date
}

export async function addEventToCalendarDatabase(calendarEvent: CalendarEvent) {
  const { data } = await supabase.from('CalendarEvent').insert(calendarEvent).select()

  return data
}
