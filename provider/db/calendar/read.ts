// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'
import { getBaseRecipeDatabase } from '../recipes/read'

export async function getCalendarIdDatabase(userId: string) {
  return await supabase.from('Calendar').select('id').contains('userIds', [userId]).single()
}

export async function getCalendarEventsDatabase(calendarId: string, scheduleAt: Date) {
  const { data } = await supabase
    .from('CalendarEvent')
    .select()
    .eq('calendarId', calendarId)
    .eq('scheduleAt', scheduleAt)

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
