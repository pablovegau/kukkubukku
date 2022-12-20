// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { supabase } from 'provider/supabaseClient'
import { TABLE_NAMES } from '../constants'
import { getCalendarEventsBetweenDatesDatabase, getCalendarIdDatabase } from '../calendar/read'
import {
  getIngredientByIdDatabase,
  getMeasurementByIdDatabase,
  getRecipeIngredientsByRecipeIdDatabase,
} from '../recipes/read'

export async function insertShoppingListDatabase(userId: string, name: string) {
  return await supabase
    .from(TABLE_NAMES.SHOPPING_LIST)
    .insert([
      {
        userIds: [userId],
        name,
      },
    ])
    .select()
    .single()
}

export async function insertShoppingListItemDatabase(ingredients: any[]) {
  return await supabase.from(TABLE_NAMES.SHOPPING_LIST_ITEM).insert(ingredients)
}

export async function createShoppingListDatabase(userId: string, name: string, value: any) {
  // insertShoppingList
  const { data: shoppingList } = await insertShoppingListDatabase(userId, name)

  // Get calendar events
  const { data: calendarId } = await getCalendarIdDatabase(userId)
  const { data: calendarEvents } = await getCalendarEventsBetweenDatesDatabase(calendarId.id, value.start, value.end)

  // Get ingredients
  async function getRecipeIngredients(recipeId: any, diners: number) {
    const recipeIngredients = await getRecipeIngredientsByRecipeIdDatabase(recipeId)

    const ingredientsPromises = recipeIngredients.data?.map(async (recipeIngredient) => {
      const ingredient = await getIngredientByIdDatabase(recipeIngredient.ingredientId)
      const measurement = await getMeasurementByIdDatabase(recipeIngredient.measurementId)

      return {
        name: ingredient.data?.name,
        ingredientId: ingredient.data?.id,
        measurementId: measurement.data?.id,
        shoppingListId: shoppingList?.id,
        amount: recipeIngredient.amount,
        diners,
        recipeId,
      }
    })

    return await Promise.all(ingredientsPromises)
  }

  const ingredientPromises = calendarEvents?.map(async (calendarEvent) => {
    return await getRecipeIngredients(calendarEvent.recipeId, calendarEvent.diners)
  })

  const ingredients = await Promise.all(ingredientPromises)

  // insertShoppingListItem
  await insertShoppingListItemDatabase(ingredients.flat())
}

export async function updateShoppingListItemStateByIdDatabase(isChecked: boolean, itemId: string) {
  await supabase.from(TABLE_NAMES.SHOPPING_LIST_ITEM).update({ isChecked }).eq('id', itemId).select()
}
