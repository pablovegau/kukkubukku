// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'
import { getBaseRecipeDatabase } from '../recipes/read'

export async function getCalendarIdDatabase(userId: string) {
  return await supabase.from('Calendar').select('id').contains('userIds', [userId]).single()
}

export async function getCalendarOneDayEventsDatabase(calendarId: string, date: Date) {
  return await supabase.from('CalendarEvent').select().eq('calendarId', calendarId).eq('scheduleAt', date)
}

export async function getCalendarEventsBetweenDatesDatabase(calendarId: string, start: Date, end: Date) {
  return await supabase
    .from('CalendarEvent')
    .select()
    .eq('calendarId', calendarId)
    .gte('scheduleAt', start)
    .lte('scheduleAt', end)
}

export async function getCalendarEventsDatabase(calendarId: string, scheduleAt: Date) {
  const { data } = await getCalendarOneDayEventsDatabase(calendarId, scheduleAt)

  const events = data?.map(async (event) => {
    const { data: recipe } = await getBaseRecipeDatabase(event.recipeId)
    return { ...event, recipe }
  })

  const eventsProcessed = await Promise.all(events)

  const eventsByMeal = {
    breakfast: [],
    'mid-morning_snack': [],
    lunch: [],
    afternoon_snack: [],
    dinner: [],
  }

  eventsProcessed?.forEach((event) => {
    eventsByMeal[event.meal].push(event)
  })

  return eventsByMeal
}
